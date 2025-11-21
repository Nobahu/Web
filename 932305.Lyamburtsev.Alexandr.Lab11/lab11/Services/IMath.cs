namespace lab11.Services
{
    public interface IMathProcessor
    {
        int GenerateValue();
        string Sum(int x, int y);
        string Divide(int x, int y);
        string Multiply(int x, int y);
        string Subtract(int x, int y);
    }
}
