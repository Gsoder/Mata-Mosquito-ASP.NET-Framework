using System.Web;
using System.Web.Mvc;

namespace Jogo_da_Mosca_ASP.NET_Framework
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
