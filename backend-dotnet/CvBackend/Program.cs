using DotNetEnv;
using CvBackend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

DotNetEnv.Env.Load("../../.env");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options=>
{
    options.AddPolicy("AllowAngular", policy=>
    {
        policy.WithOrigins("http://localhost:4200") // Adjust the origin as needed})
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var connectionString = $"Host=localhost;Port=8001;"+
                       $"Database={Environment.GetEnvironmentVariable("POSTGRES_DB")};"+
                       $"Username={Environment.GetEnvironmentVariable("POSTGRES_USER")};"+
                       $"Password={Environment.GetEnvironmentVariable("POSTGRES_PASSWORD")}";

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAngular");
app.UseAuthorization();

app.MapControllers();

app.Run();
