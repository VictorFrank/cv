using Microsoft.AspNetCore.Mvc;
using CvBackend.Models;

namespace  CvBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MtgFormController : ControllerBase
{
    [HttpPost("submit")]
    public IActionResult SubmitForm([FromBody] MtgFormData formData)
    {
        if (formData == null)
        {
            return BadRequest("Formdata is missing.");
        }

        return Ok(new
        {
            Message = "Form submitted successfully",
            Data = formData
        });
    }
}