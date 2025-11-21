using lab11.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace lab11.Controllers
{
    public class SiteController : Controller
    {
        private readonly ILogger<SiteController> _recorder;

        public SiteController(ILogger<SiteController> recorder)
        {
            _recorder = recorder;
        }

        public IActionResult Main() => View();

        public IActionResult CalculatorWithModel()
        {
            MathData data = new MathData();
            return View(data);
        }

        public IActionResult CalculatorWithViewData()
        {
            MathData data = new MathData();
            ViewData["operandA"] = data.operandA;
            ViewData["operandB"] = data.operandB;
            return View();
        }

        public IActionResult CalculatorWithViewBag()
        {
            MathData data = new MathData();
            ViewBag.operandA = data.operandA;
            ViewBag.operandB = data.operandB;
            return View();
        }

        public IActionResult CalculatorWithInjection() => View();

        public IActionResult About() => View();

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Issue()
        {
            return View(new ErrorModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}