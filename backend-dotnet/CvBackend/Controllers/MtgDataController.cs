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
            return Ok("GET to fetch data works");
        }
    }
}