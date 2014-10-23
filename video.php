<?php 

$range = '60-120';
$host = "cap2015.cameleons.com";
$socket = fsockopen($host,80);
//$packet = "GET /path/to/static/file.xml HTTP/1.1\r\nHost: $host\r\nRange:bytes=$range\r\nAccept-Encoding: gzip\r\nConnection: close\r\n\r\n";
$packet = "GET /img/slides/curatif/01/Industrial-Movie_03.mp4 HTTP/1.1\r\nHost: $host\r\nRange:bytes=$range\r\nAccept-Encoding: gzip\r\nConnection: close\r\n\r\n";

fwrite($socket,$packet);
echo fread($socket,2048);


?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="favicon.ico">
  
  <title>CAP 2015 - Virbac</title>
  
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  
  <link href="css/cap2015.css" rel="stylesheet">

  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  
  <link rel="stylesheet" href="css/swipebox.css">
  <link href="video-js/video-js.css" rel="stylesheet" type="text/css">

</head>



<body class="curatifBG">
  
 

 

<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" autoplay="true" width="100%" height="100%" poster="img/slides/curatif/01/Industrial-Movie_03.jpg" data-setup="{}">
<source src="img/slides/curatif/01/Industrial-Movie_03.mp4" type="video/mp4" />
<source src="img/slides/curatif/01/Industrial-Movie_03.webm" type="video/webm" />  
<source src="img/slides/curatif/01/Industrial-Movie_03.ogv" type="video/ogg" />

<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> 
</video>







  
  <!-- Bootstrap core JavaScript
  ================================================== -->
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.swipebox.js"></script>

  <script src="video-js/video.js"></script>


  <script type="text/javascript">
  ;( function( $ ) {

    $( '.swipebox' ).swipebox();
    $( '.swipebox-video' ).swipebox();

  } )( jQuery );




$( "article" ).hide();
$( "header h1" ).hide();

$( "header h1" ).slideDown( "slow", function() {
  $('article:hidden:first').fadeIn('2000', function() {
      $('article:hidden:first').fadeIn('2000', function() {
        $('article:hidden:first').fadeIn('2000');
      });
  });

});



</script>



</body>
</html>

