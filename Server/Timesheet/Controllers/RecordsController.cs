using Microsoft.AspNetCore.Mvc;
using Timesheet.Data.Entities;
using Timesheet.Data.Models;
using Timesheet.Services;

namespace Timesheet.Controllers
{
    [ApiController]
    [Route("api")]
    public class RecordsController : ControllerBase
    {
        private readonly RecordService RecordServices;

        public RecordsController(RecordService recordService)
        {
            RecordServices = recordService;
        }

        [HttpGet("[controller]/GetAll")]
        public IActionResult GetAll()
        {
            List<TimesheetRecord> result = RecordServices.GetAllRecords();
            return Ok(result);
        }
        [HttpPost("[controller]/Create")]
        public IActionResult Create([FromBody] CreateUpdateTimesheetRecordModel model)
        {
            Guid result = RecordServices.CreateRecord(model);
            return Ok(result);
        }
        [HttpPost("[controller]({id})/Update")]
        public IActionResult Update(Guid id, [FromBody] CreateUpdateTimesheetRecordModel model)
        {
            Guid result = RecordServices.UpdateRecord(id, model);
            return Ok(result);
        }
        [HttpPost("[controller]({id})/Delete")]
        public IActionResult Delete(Guid id)
        {
            Guid result = RecordServices.DeleteRecord(id);
            return Ok(result);
        }
    }
}