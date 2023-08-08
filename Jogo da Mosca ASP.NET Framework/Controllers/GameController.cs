using Jogo_da_Mosca_ASP.NET_Framework.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Jogo_da_Mosca_ASP.NET_Framework.Controllers
{

    public class GameController : Controller
    {
        GerenciamentoJogo model = new GerenciamentoJogo();

        public ActionResult request()
        {
            return Json(new { Resultado = "a"}, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult app(string dificult)
        {
            

            if (dificult == null | dificult == "")
            {
                model.message = "Selecione uma dificuldade";

                return View("Index");

            }
            else
            {

                model.dificuldade = dificult;
                return View(model);
                
            }

        }


    }
}