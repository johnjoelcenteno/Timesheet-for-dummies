using Microsoft.EntityFrameworkCore;
using Timesheet.Data.Entities;

namespace Timesheet.Data
{
    public class TimesheetDbContext : DbContext
    {
        public DbSet<TimesheetRecord> Records { get; set; }
        public TimesheetDbContext(DbContextOptions<TimesheetDbContext> options) : base(options)
        {

        }
    }
}
