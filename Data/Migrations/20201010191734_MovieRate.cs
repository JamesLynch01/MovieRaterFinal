using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Data.Migrations
{
    public partial class MovieRate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Actor",
                table: "MovieInfos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Catergory",
                table: "MovieInfos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Actor",
                table: "MovieInfos");

            migrationBuilder.DropColumn(
                name: "Catergory",
                table: "MovieInfos");
        }
    }
}
