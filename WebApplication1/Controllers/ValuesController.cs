using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Text;
using System.Text.Json;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            string path = @"C:\Users\kopyl\Desktop\Новый текстовый документ.txt";
            string[] text = System.IO.File.ReadAllLines(path);
            return Ok(text);
        }

        [HttpPut]
        public ActionResult Update([FromBody] JsonElement body)
        {
            string text = body.GetProperty("value").ToString();
            string path = @"C:\Users\kopyl\Desktop\Новый текстовый документ.txt";
            System.IO.File.WriteAllText(path, text);
            return Ok(text);

        }

    }
}



