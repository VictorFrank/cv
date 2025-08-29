using Microsoft.AspNetCore.Mvc;
using CvBackend.Models;
using CvBackend.Data;

namespace CvBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MtgDataController : ControllerBase
    {

        [HttpGet("data")]
        public async Task<IActionResult> GetData()
        {
            return Ok(new { message = "Data endpoint is working." });
        }
    }
}