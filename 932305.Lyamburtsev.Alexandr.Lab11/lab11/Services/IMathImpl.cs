using lab11.Models;

namespace lab11.Services
{
    public class MathProcessor : IMathProcessor
    {
        System.Random rng = new System.Random();

        public int GenerateValue() => rng.Next(10);

        public string Sum(int x, int y) => (x + y).ToString();

        public string Divide(int x, int y) => y == 0 ? "error" : (x / y).ToString();

        public string Multiply(int x, int y) => (x * y).ToString();

        public string Subtract(int x, int y) => (x - y).ToString();
    }
}
