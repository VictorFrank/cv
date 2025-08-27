using CvBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace CvBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<MtgFormData> MtgFormDatas { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Map MtgFormData to "matches" table
            modelBuilder.Entity<MtgFormData>(entity =>
            {
                entity.ToTable("matches"); // table name in PostgreSQL

                // Automatically convert all property names to lowercase column names
                foreach (var property in entity.Metadata.GetProperties())
                {
                    property.SetColumnName(property.Name.ToLower());
                }
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}