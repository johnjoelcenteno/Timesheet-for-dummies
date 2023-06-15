namespace Timesheet.Data.Models
{
    public class CreateUpdateTimesheetRecordModel
    {
        public string Activity { get; set; }
        public decimal Hours { get; set; }
        public DateTime Created { get; set; }
        public string Company { get; set; }
    }
}
