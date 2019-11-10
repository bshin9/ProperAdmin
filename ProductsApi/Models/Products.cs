namespace ProductsApi.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }
        public string ProductDescription { get; set; }
        public string Images { get; set; } 
    }
}
