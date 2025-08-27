using Microsoft.AspNetCore.Mvc;
using CvBackend.Models;
using CvBackend.Data;

namespace CvBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MtgFormController : ControllerBase
    {
        private readonly AppDbContext _context;
        
        public MtgFormController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitForm([FromBody] MtgFormData formData)
        {
            if (formData == null)
                return BadRequest("Form data is null.");

            _context.MtgFormDatas.Add(formData);
            await _context.SaveChangesAsync();
            
            return Ok(new { message = "Form data submitted successfully." });
        }
    }
}