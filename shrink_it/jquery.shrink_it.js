/*********************************************************************
*Copyright 2014 Adam Burt www.burtinteractive.com
*
*Permission is hereby granted, free of charge, to any person obtaining
*a copy of this software and associated documentation files (the
*"Software"), to deal in the Software without restriction, including
*without limitation the rights to use, copy, modify, merge, publish,
*distribute, sublicense, and/or sell copies of the Software, and to
*permit persons to whom the Software is furnished to do so, subject to
*the following conditions:
*
*The above copyright notice and this permission notice shall be
*included in all copies or substantial portions of the Software.
*
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
*EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
*MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
*NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
*LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
*OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
*WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**********************************************************************/
/***********************************************************************
*Shrink_it 
*provide a parent id then shrink text found inside
*add break points?
*use on images, videos and text
*get parent elements width then count child elements if only 1 == 100% else
*divide by the amount of children foundl
************************************************************************/
(function($){

	$.fn.shrink_it= function(options){
		/**************variables****************
		* records =   how many records you want returned 
		* increment = how many records to return on scroll or load
		* width     = set height of returned div area. Default 100%
		* scrolling	= allows scrolling or not.
		*
		*
		*
		****************************************/
		var settings =$.extend({
			
			level:  		null,
			parent: 		null,		
			break_points:   null
		
		
		}, options);
		
		//self = this;
		var $object = settings.parent;
		var $level = settings.level;
		var $break_point_array = settings.break_points.split(",");
		var $object_array = $object.split(",");
		var $width_array = new Array();
		var $height_percent_array = new Array();
		var $height_array = new Array();
		var $percent_array = new Array();
		var $height_count = 0;
		var $width=0;
		if($level == 'all'){
			
			getElements();
		
		}else{
			getElements()
		}
		parse();
		
		function parse(){
			//console.log($level);
			
			
			//console.log($($object).attr("id"));
			//console.log($("#"+$object))
			console.log($(this).html());
			console.log("test");
			$count =0;
			
			$arr_count=0;
			//$('#'+$($object).attr("id")).children().each(function () {
			while($arr_count < $object_array.length){	
			
				console.log($break_point_array[$arr_count]+ "-------------------------break point")
				$('#'+$object_array[$arr_count]).children().each(function () {
    				//alert(this.value); // "this" is the current element in the loop
    				console.log(this + "  this is here "+ $object_array[$arr_count]);
    				console.log(this.width+ " this is width "+ this.height);
    				//must take parents width into account. If parent width is smaller then it becomes width.
    				//console.log($(this).parent().width()+ " this is parent width");
    				//console.log($height_count + "  height count");
    				if($(this).parent().width()< this.width){
    					$width=$(this).parent().width();
    				}else{
    					$width= this.width;
    				}
    				
    				//$height_array[$height_count]=this.width+":"+this.height;
    				$height_array[$height_count]=$width+":"+this.height;
					$count++;
					$height_count++;
				});
				//$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width()/$count;
				//console.log($("#"+$object_array[$arr_count]).width()+ " <-- object width --> "+$object_array[$arr_count] );
				$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width()/$count;
				//$arr_count =0;
				$height_count=0;
				$count =0;
				changeSize($arr_count);
				$count=0;
				$arr_count++;
			}
			//$arr_count=0;
			//console.log($count);
			//$height_count=0;
			//console.log($("#"+$object).width());
		//	$width= $("#"+$object_array[]).width()/$count;
			//console.log(Math.floor($width));
			/*$count=0;
			while($arr_count < $object_array.length){	
				$('#'+$object_array[$arr_count]).children().each(function () {
    				console.log($height_array[$height_count]+ " this is the height value "+ $height_count);
    				$percent_array = $height_array[$height_count].split(":");
    				
    				$percent = $percent_array[1]/$percent_array[0];
    				this.style.width=Math.floor($width_array[$arr_count])+"px";
    				this.style.height=(Math.floor($width_array[$arr_count])*$percent)+"px";
    			
    				console.log($percent + " "+ $percent_array[0]+ " " + $percent_array[1])
    				
    			
    				 
    				
    				this.style.cssFloat ="left";
    				$count++;
    				$height_count++;
				});
				$count=0;
				$arr_count++;
			}*/
			
		}
		function changeSize($the_count){
			
			
				$('#'+$object_array[$the_count]).children().each(function () {
    				
    				//console.log($height_array[$height_count]+ " this is the height value "+ $height_count);
    				$percent_array = $height_array[$height_count].split(":");
    				
    				$percent = $percent_array[1]/$percent_array[0];
    				this.style.width=Math.floor($width_array[$arr_count])+"px";
    				this.style.height=(Math.floor($width_array[$arr_count])*$percent)+"px";
    			
    				//console.log($percent + " "+ $percent_array[0]+ " " + $percent_array[1])
    				
    			
    				 
    				
    				this.style.cssFloat ="left";
    				$count++;
    				$height_count++;
				});
				
			$height_count=0;
			$count =0;
			
			$width_array.length= 0;
			
		}
		
		function getElements(){
		
			
			
		}
		
		
	}  
 }(jQuery));