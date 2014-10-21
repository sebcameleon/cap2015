$(function(){
 $(".maparea4").mapael({
  map : {
   name : "france_departments",
   width: 500,
   defaultArea: {
    attrs : {
     stroke : "#fff", 
     "stroke-width": 1
    },
    attrsHover : {
     "stroke-width": 2
    }
   }
  },

  legend : {
   area : {
    display : true,
    //title :"Coordonées force de vente",
    slices : [
    {
     min :1, 
     max :2, 
     attrs : {
      fill : "#fcc866"
     },
     label :"Région 1"
    },
    {
     min :2, 
     max :3, 
     attrs : {
      fill : "#c9e8f8"
     },
     label :"Région 2"
    },
    {
     min :3, 
     max :4, 
     attrs : {
      fill : "#aad3ac"
     },
     label :"Région 3"
    }
    ]
   }
  },






 areas: {

 "R01":{ 
 value: "1", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R01</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/L.Lefeuvre.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Loïc LE FEUVRE </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 66 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:loic.lefeuvre@virbac.fr\"> loic.lefeuvre@virbac.fr </a> "} 
 }, 
 
 
 "R02":{ 
 value: "1", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R02</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/S.Marchand.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mlle Sandra MARCHAND </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 41 34 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:sandra.marchand@virbac.fr\"> sandra.marchand@virbac.fr </a> "} 
 }, 
 
 
 "R03":{ 
 value: "1", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R03</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/D.Lebreton.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Didier LEBRETON </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 75 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:didier.lebreton@virbac.fr\"> didier.lebreton@virbac.fr </a> "} 
 }, 
 
 
 "R04":{ 
 value: "1", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R04</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/C.Rouchez.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mlle Carine ROUCHEZ </span><br/> <img src=\"img/mapMobile.png\"/> 06 11 72 24 30 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:carine.rouchez@virbac.fr\"> carine.rouchez@virbac.fr </a> "} 
 }, 
 
 
 "R05":{ 
 value: "1", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R05</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/C.Chesne.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Christian CHESNE </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 77 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:christian.chesne@virbac.fr\"> christian.chesne@virbac.fr </a> "} 
 }, 
 
 
 "R06":{ 
 value: "2", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R06</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/S.Bourdon.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Simon BOURDON </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 39 89 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:simon.bourdon@virbac.fr\"> simon.bourdon@virbac.fr </a> "} 
 }, 
 
 
 "R07":{ 
 value: "2", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R07</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/M.bethembos.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Maxime BETHEMBOS </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 41 74 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:maxime.bethembos@virbac.fr\"> maxime.bethembos@virbac.fr </a> "} 
 }, 
 
 
 "R08":{ 
 value: "2", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R08</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/D.Godfrin.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Denis GODFRIN </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 42 27 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:denis.godfrin@virbac.fr\"> denis.godfrin@virbac.fr </a> "} 
 }, 
 
 
 "R09":{ 
 value: "2", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R09</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/M.Allioux.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mlle Marion ALLIOUX </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 42 42 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:marion.allioux@virbac.fr\"> marion.allioux@virbac.fr </a> "} 
 }, 
 
 
 "R10":{ 
 value: "2", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R10</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/P.Charretier.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Pierre-Damien CHARRETIER </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 66 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:pierre-damien.charretier@virbac.fr\"> pierre-damien.charretier@virbac.fr </a> "} 
 }, 
  

 "R10b":{ 
 value: "2", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R10</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/P.Charretier.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Pierre-Damien CHARRETIER </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 66 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:pierre-damien.charretier@virbac.fr\"> pierre-damien.charretier@virbac.fr </a> "} 
 }, 
 
 
 "R11":{ 
 value:"3", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R11</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/L.Cance.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Lionel CANCE </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 42 72 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:lionel.cance@virbac.fr\"> lionel.cance@virbac.fr </a> "} 
 }, 
 
 
 "R12":{ 
 value:"3", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R12</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/C.Dalaigre.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mme Corinne DALAIGRE </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 91 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:corinne.dalaigre@virbac.fr\"> corinne.dalaigre@virbac.fr </a> "} 
 }, 
 
 
 "R13":{ 
 value:"3", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R13</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/F.Carriat.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Frédéric CARRIAT </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 02 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:frederic.carriat@virbac.fr\"> frederic.carriat@virbac.fr </a> "} 
 }, 
 
 
 "R14":{ 
 value:"3", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R14</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/J.M.Dessenoix.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Jean Michel DESSENOIX </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 39 83 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:jean-michel.dessenoix@virbac.fr\"> jean-michel.dessenoix@virbac.fr </a> "} 
 }, 
 
 
 "R15":{ 
 value:"3", 
 href : "#", 
 tooltip: {content : "<h3>Secteur R15</h3> <img class=\"img-circle\" width=\"70px\" src=\"img/trombi/C.Lapoutge.jpg \"> <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Christophe LAPOUTGE </span><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 41 19 <br/> <img src=\"img/mapEmail.png\"/> <a href=\"mailto:christophe.lapoutge@virbac.fr\"> christophe.lapoutge@virbac.fr </a> "} 
 } 



}


/*,


plots : {
 'R01' : {
  size:0,
  latitude :45.758888888889, 
  longitude: 4.8413888888889, 
  text : {content : "R01"}
 }
}*/




});
});



