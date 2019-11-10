using Microsoft.EntityFrameworkCore;

namespace ProductsApi.Models
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) :
            base(options)
        { }
        public DbSet<Products> Products { get; set; }
    }
}
