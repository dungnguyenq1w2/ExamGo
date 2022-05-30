using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        //private readonly ILogger<WeatherForecastController> _logger;

        //public WeatherForecastController(ILogger<WeatherForecastController> logger)
        //{
        //    _logger = logger;
        //} 
        private readonly IConfiguration _configuration;
        public WeatherForecastController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            string query = @"
                            select * from ql_detai.GIAOVIEN
            ";
           
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    //Console.WriteLine("myReader anc");
                    //while(myReader.Read())
                    //{
                    //    for (int i = 0; i < myReader.FieldCount; i++)
                    //    {
                    //        Console.WriteLine(myReader.GetValue(i).ToString());
                    //    }
                    //}
                    myReader.Close();
                    myCon.Close();
                }
            }

            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //})
            //.ToArray();
            return Enumerable.Range(1, myReader.FieldCount).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray(); ;

        }


        //[HttpGet]
        //public JsonResult Get()
        //{
        //    string query = @"
        //                    select * from ql_detai.GIAOVIEN
        //    ";
        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("DBCon");
        //    MySqlDataReader myReader;
        //    using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            Console.WriteLine("myReader", myReader);
        //            table.Load(myReader);
        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }
        //    return new JsonResult(table);
        //}
    }
}
