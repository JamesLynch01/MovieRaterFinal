using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieInfoController : ControllerBase
    {

        private ApplicationDbContext _context;
        public MovieInfoController(ApplicationDbContext context) {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<MovieArchive> Get()
        {
                var movies = _context.MovieArchives.ToArray();
                return movies;
        }

        [HttpPost]
        public MovieArchive Post([FromBody]MovieArchive movies)
        {
            
            _context.MovieArchives.Add(movies);
            _context.SaveChanges();
           return movies;
        }

        [HttpDelete("{id}")]
        public void Delete([FromRoute]MovieArchive movie) {
            _context.MovieArchives.Remove(movie);
            _context.SaveChanges();
        }
    }
}
