using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovieInfos");

            migrationBuilder.CreateTable(
                name: "MovieArchives",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(nullable: true),
                    movie_poster = table.Column<string>(nullable: true),
                    movieId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieArchives", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovieArchives");

            migrationBuilder.CreateTable(
                name: "MovieInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Actor = table.Column<string>(type: "TEXT", nullable: true),
                    Catergory = table.Column<string>(type: "TEXT", nullable: true),
                    Directer = table.Column<string>(type: "TEXT", nullable: true),
                    RunTime = table.Column<int>(type: "INTEGER", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieInfos", x => x.Id);
                });
        }
    }
}
