namespace Timesheet.Data.Entities
{
    public class TimesheetRecord
    {
        public Guid Id { get; set; }
        public string Activity { get; set; }
        public decimal Hours { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public string Company { get; set; }
    }
}
