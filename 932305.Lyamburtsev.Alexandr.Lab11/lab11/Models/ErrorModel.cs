namespace lab11.Models
{
    public class ErrorModel
    {
        public string? RequestId { get; set; }
        public bool DisplayRequestId => !string.IsNullOrEmpty(RequestId);
    }
}