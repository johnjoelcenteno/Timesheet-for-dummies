namespace Timesheet.Data.Models
{
    public class CreateUpdateTimesheetRecordModel
    {
        public string Activity { get; set; }
        public decimal Hours { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public string Company { get; set; }
    }
}
