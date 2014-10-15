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
      value:"1",            
      href :"#",
    //text : {content : "R01"},            
    tooltip: {content :"<h3>Secteur R01</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Loïc LE FEUVRE </span><br/> 20 rue d'Armor <br/> 22940 SAINT JULIEN <br/><br/><img src=\"img/mapTel.png\"/> 09 71 31 39 88 <br/> <img src=\"img/mapMobile.png\"/>  06 10 12 40 66"}    
  },            


  "R02":{          
    value:"1",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R02</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mlle Sandra MARCHAND </span><br/> Lotissement de KERLAPIN<br/>La Lande de la Boule <br/> 56230 BERRIC <br/><br/><img src=\"img/mapTel.png\"/>  02 97 67 70 44 <br/> <img src=\"img/mapMobile.png\"/>     06 10 12 41 34"}    
  },            


  "R03":{          
    value:"1",            
    href :"#",
    tooltip: {content :"<h3>Secteur R03</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Didier LEBRETON </span><br/> Le Hamel Guesnier<br/>Route de l'Abbaye d'Hambye <br/> 50410 PERCY <br/><br/><img src=\"img/mapTel.png\"/>     09 71 31 36 10 <br/> <img src=\"img/mapMobile.png\"/>     06 10 12 40 75"}    
  },            


  "R04":{          
    value:"1",            
    href :"#",
    tooltip: {content :"<h3>Secteur R04</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mlle Carine ROUCHEZ </span><br/> 40 rue de Perthuis <br/> 28240 FONTAINE SIMON <br/><br/><img src=\"img/mapTel.png\"/>     09 62 15 95 94 <br/> <img src=\"img/mapMobile.png\"/> 06 11 72 24 30"}    
  },            


  "R05":{          
    value:"1",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R05</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Christian CHESNE </span><br/> 8 Allée des Chataigniers <br/> 49440 CANDE <br/><br/><img src=\"img/mapTel.png\"/> 09 72 96 09 61 / 02 41 61 42 59 <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 77"}    
  },            


  "R06":{          
    value:"2",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R06</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Simon BOURDON </span><br/> 39 rue Jacques Duclos <br/> 59161 NAVES <br/><br/><img src=\"img/mapTel.png\"/> 03 27 74 05 74     <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 39 89"}    
  },            


  "R07":{          
    value:"2",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R07</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Maxime BETHEMBOS </span><br/> 13 rue de la République <br/> 02400 CHIERRY   <br/><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 41 74"}    
  },            


  "R08":{          
    value:"2",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R08</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Denis GODFRIN </span><br/> 102 rue des Sorbiers <br/> 57155 MARLY <br/><br/><img src=\"img/mapTel.png\"/> 08 72 96 11 92 <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 42 27"}    
  },            


  "R09":{          
    value:"2",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R09</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mlle Marion ALLIOUX </span><br/> rue du Four, 31 <br/> 1400 YVERDON LES BAINS <br/> SUISSE   <br/><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 42 42    66726"}    
  },            


  "R10":{          
    value:"2",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R10</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Pierre-Damien CHARRETIER </span><br/> 1877, chemin de Fouseron <br/> 30320 SAINT GERVASY <br/><br/><img src=\"img/mapTel.png\"/> 09 71 31 39 88 <br/> <img src=\"img/mapMobile.png\"/>  06 10 12 40 66"}    
  },            
  "R10b":{          
    value:"2",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R10</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Pierre-Damien CHARRETIER </span><br/> 1877, chemin de Fouseron <br/> 30320 SAINT GERVASY <br/><br/><img src=\"img/mapTel.png\"/> 09 71 31 39 88 <br/> <img src=\"img/mapMobile.png\"/>  06 10 12 40 66"}    
  },            


  "R11":{          
    value:"3",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R11</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Lionel CANCE </span><br/> La Vayssiguie <br/> 12450 FLAVIN <br/><br/><img src=\"img/mapTel.png\"/> 05 63 42 08 22 <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 42 72"}    
  },            


  "R12":{          
    value:"3",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R12</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> Mme Corinne DALAIGRE </span><br/> Les Chaumes des Veaux <br/><br/> 03330 ECHASSIERES   <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 91"}    
  },            


  "R13":{          
    value:"3",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R13</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Frédéric CARRIAT </span><br/> Néravaud <br/> 23300 ST PRIEST LA FEUILLE   <br/><br/> <img src=\"img/mapMobile.png\"/> 06 10 12 40 02"}    
  },            


  "R14":{          
    value:"3",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R14</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Jean Michel DESSENOIX </span><br/> Le Brouillaud <br/> 24400 BEAUPOUYET <br/><br/><img src=\"img/mapTel.png\"/> 05 53 80 09 92 <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 39 83"}    
  },            


  "R15":{          
    value:"3",            
    href :"#",            
    tooltip: {content :"<h3>Secteur R15</h3>  <br/><img src=\"img/mapUser.png\"/> <span style=\"font-weight:bold;\"> M. Christophe LAPOUTGE </span><br/> Lieu dit Baron <br/> 32170 BARCUGNAN  <br/> <br/> <img src=\"img/mapMobile.png\"/> 06 10 12 41 19"}    

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



