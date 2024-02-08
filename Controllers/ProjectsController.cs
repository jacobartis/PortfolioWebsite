using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PortfolioSite.Models;

namespace PortfolioSite.Controllers;

public class ProjectsController : Controller
{
    private readonly ILogger<ProjectsController> _logger;

    public ProjectsController(ILogger<ProjectsController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult GoFish()
    {
        return View();
    }

    public IActionResult TimeAttack()
    {
        return View();
    }

    public IActionResult CADLanguage()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
