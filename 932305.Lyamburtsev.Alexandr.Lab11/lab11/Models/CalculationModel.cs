namespace lab11.Models
{
    public class MathData
    {
        public int operandA { get; set; }
        public int operandB { get; set; }

        public MathData()
        {
            var rnd = new System.Random(System.DateTime.Now.Millisecond);
            operandA = rnd.Next(10);
            operandB = rnd.Next(10);
        }

        public MathData(int x, int y)
        {
            operandA = x;
            operandB = y;
        }
    }
}
