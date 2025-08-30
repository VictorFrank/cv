using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CvBackend.Models;
using CvBackend.Data;

namespace CvBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MtgDataController : ControllerBase
    {
        
        private readonly AppDbContext _context;
        
        public MtgDataController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("stringtest")]
        public async Task<IActionResult> GetString()
        {
            return Ok(new { message = "Data endpoint is working." });
        }

        [HttpGet("data")]
        public async Task<IActionResult> GetData()
        {
            var matches = await _context.MtgFormDatas.ToListAsync();
            return Ok(matches);
        }
    }
}