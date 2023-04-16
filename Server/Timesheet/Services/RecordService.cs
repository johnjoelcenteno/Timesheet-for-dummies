using System.Diagnostics;
using Timesheet.Data;
using Timesheet.Data.Entities;
using Timesheet.Data.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Timesheet.Services
{
    public class RecordService
    {
        private readonly TimesheetDbContext _dbContext;

        public RecordService(TimesheetDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Guid CreateRecord(CreateUpdateTimesheetRecordModel model)
        {
            Guid id = Guid.NewGuid();
            TimesheetRecord record = MapModelToEntity(model);
            record.Id = id;

            _dbContext.Records.Add(record);
            _dbContext.SaveChanges();
            return id;
        }

        public List<TimesheetRecord> GetAllRecords()
        {
            return _dbContext.Records.ToList();
        }

        public Guid UpdateRecord(Guid id, CreateUpdateTimesheetRecordModel model)
        {
            TimesheetRecord record = _dbContext.Records.FirstOrDefault(record => record.Id == id);
            if (record == null)
            {
                throw new Exception("No records found");
            }

            record.Activity = model.Activity;
            record.Hours = model.Hours;
            record.Company = model.Company;
            record.Created = model.Created;

            _dbContext.Records.Update(record);
            _dbContext.SaveChanges();
            return id;
        }

        public Guid DeleteRecord(Guid id)
        {
            TimesheetRecord record = _dbContext.Records.FirstOrDefault(record => record.Id == id);
            if (record == null)
            {
                throw new Exception("Record not found");
            }
            _dbContext.Records.Remove(record);
            _dbContext.SaveChanges();
            return id;
        }

        private TimesheetRecord MapModelToEntity(CreateUpdateTimesheetRecordModel model)
        {
            return new TimesheetRecord()
            {
                Activity = model.Activity,
                Hours = model.Hours,
                Created = model.Created,
                Company = model.Company
            };
        }
    }
}
