<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset=”utf-8”>
	<title>shrink it test foundation example</title>
	<link rel="stylesheet" type="text/css" href="foundation/normalize.css"/>
	<link rel="stylesheet" type="text/css" href="foundation/foundation.min.css"/>
	
	<link rel="stylesheet" type="text/css" href="styles.css"/>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script type="text/javascript" src="foundation/foundation.min.js"></script>
	<script type="text/javascript" src="jquery.shrink_it.js"></script>
	

<script type="text/javascript">

	//should give option to auto generate container or name their own
	$(document).ready(function(){
		
		$(window).shrink_it({
			
       			/****************configuration******************/
       			level:		    'all',
       			parent:         'video,square,img,nav,video2,img2,img3,verts,top',
       			break_points:   '0,0,720,0,0,0,0,0,0',
       			per_row:		'0,0,0,0',
       			stretch:		'0,0,0,0,0,0,0,0'
       	});
       	$(window).resize(function(){
       	
       		$('#nav').shrink_it({
       			/****************configuration******************/
       			level:			'all',
       			parent: 		'video,square,img,nav,video2,img2,img3,verts,top',
       			break_points:   '0,0,720,0,0,0,0,0,0,0',
       			per_row:		'0,0,0,0',
       			stretch:		'0,0,0,0,0,0,0,0'
       			
       		});
       	
       	})
       	
       		
    });
       		
</script>
</head>
<body>
	<div class="row">
	<nav id="nav">
		<ul>
			<li><a href="#">test1</a></li>
			<li><a href="#">test1</a></li>
			<li><a href="#">test1</a></li>
			<li><a href="#">test1</a></li>
		</ul>
		<ul>
			<li><a href="#">test1</a></li>
			<li><a href="#">test1</a></li>
			<li><a href="#">test1</a></li>
			<li><a href="#">test1</a></li>
		</ul>
		<p>
		taco bell
		</p>
	</nav>
	
	</div>
	<div class="row" id="img">
		<img src="untapped.jpg" />
		<img src="untapped.jpg" />
	</div>
	<div class="row" id="square">
		<img src="square.jpg" />
		<img src="square.jpg" />
		<img src="square.jpg" />
		<img src="square.jpg" />
	</div>
	<div class="row" id="video2">
		<iframe width="560" height="315" src="//www.youtube.com/embed/tu0qtEwb9gE" frameborder="0" allowfullscreen></iframe>
	</div>
	
	<div class="row" id="video">
		<iframe width="560" height="315" src="//www.youtube.com/embed/tu0qtEwb9gE" frameborder="0" allowfullscreen></iframe>
		<iframe width="560" height="315" src="//www.youtube.com/embed/tu0qtEwb9gE" frameborder="0" allowfullscreen></iframe>
		<div  id="img2">
			<img src="untapped.jpg" />
			<img src="untapped.jpg" />
			<div  id="img3">
			<img src="untapped.jpg" />
			<img src="untapped.jpg" />
		</div>
		</div>
	</div>
	<div class="row">
		<img src="untapped.jpg" id="top"/>
	</div>
	<div class="row" id="verts">
		<img src="verticals.jpg" />
		<img src="verticals.jpg" />
		<img src="verticals.jpg" />
	</div>
	
</body>

</html>