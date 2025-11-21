using lab11.Services;

var appBuilder = WebApplication.CreateBuilder(args);

appBuilder.Services.AddControllersWithViews();
appBuilder.Services.AddTransient<IMathProcessor, MathProcessor>();

var application = appBuilder.Build();

if (!application.Environment.IsDevelopment())
{
    application.UseExceptionHandler("/Site/Issue");
    application.UseHsts();
}

application.UseHttpsRedirection();
application.UseStaticFiles();
application.UseRouting();
application.UseAuthorization();

application.MapControllerRoute(
    name: "standard",
    pattern: "{controller=Site}/{action=Main}/{id?}");

application.Run();
