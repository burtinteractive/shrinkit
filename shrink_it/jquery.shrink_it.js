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
	var $flag= true;
	$.fn.shrink_it= function(options){
		/**************variables****************
		* level =   how many records you want returned 
		* parent = how many records to return on scroll or load
		* break_points     = if in same div they are floated and shrunk to set next to each other.
		*					 if break point is set items will not float but maintain size at certain browser width
		* stretch	= set if stretches to parent width if smaller or retains own size1
		*
		*
		*
		****************************************/
		var settings =$.extend({
			
			level:  		null,
			parent: 		null,		
			break_points:   null,
			stretch:		null
		
		}, options);
		
		//self = this;
		var $object = settings.parent;
		var $level = settings.level;
		var $break_point_array = settings.break_points.split(",");
		var $object_array = $object.split(",");
		var $stretch_array = settings.stretch.split(",");
		var $width_array = new Array();
		var $height_array = new Array();
		var $percent_array = new Array();
		var $number_children_array = new Array();
		var $height_count = 0;
		
		var $width=0;
	
		parse();
		
		function parse(){
			//console.log($level);
			console.log($flag+ " **************************************** flag");
			
			//console.log($($object).attr("id"));
			//console.log($("#"+$object))
			console.log($(this).html());
			console.log("test");
			$count =0;
			
			$arr_count=0;
			//$('#'+$($object).attr("id")).children().each(function () {
			while($arr_count < $object_array.length){	
			
				console.log($break_point_array[$arr_count]+ "-------------------------break point")
			//	if($flag){
					$('#'+$object_array[$arr_count]).children().each(function () {
    					//alert(this.value); // "this" is the current element in the loop
    					console.log(this + "  current parent object this is here "+ $object_array[$arr_count]);
    					console.log(this.width+ " this is width "+ this.height);
    				
    					if($(this).parent().width()< this.width){
    						$width=$(this).parent().width();
    					}else{
    						$width= this.width;
    					}
    				
    					$height_array[$height_count]=$width+":"+this.height;
						$count++;
						$height_count++;
						
					});
			//	}
				$number_children_array[$arr_count]= $count;
				console.log($("#"+$object_array[$arr_count]).width()+ " <-- object width --> "+$object_array[$arr_count] );
				if($break_point_array[$arr_count]>= $('#'+$object_array[$arr_count]).width() && $break_point_array[$arr_count] != 0){
					console.log("inside break point 2***********************************************************");
					if($stretch_array[$arr_count]==0){
						console.log("*******************this is it**************************")
						//$width_array[$arr_count]=this.width;
						$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width();
					}else{
						$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width();
					}
				}else{
					
					//$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width()/$count;
					$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width()/$number_children_array[$arr_count];
				}
				
				//$arr_count =0;
				$height_count=0;
				//$count =0;
				changeSize($arr_count);
				//$count=0;
				$arr_count++;
			}
			$flag= false;
			
						console.log($flag+ " **************************************** flag2");

		}
		function changeSize($the_count){
			
			
				$('#'+$object_array[$the_count]).children().each(function () {
    				console.log($('#'+$object_array[$the_count]).width()+" should be the parents width right");
    				
    				
    				console.log("********************* height count" + $height_count);
    				//console.log($height_array[$height_count]+ " this is the height value "+ $height_count);
    				$percent_array = $height_array[$height_count].split(":");
    				
    				$percent = $percent_array[1]/$percent_array[0];
    				console.log($percent);
    				//if have parents current width. Compare to what is in break point if <= to break point value 
    				//set child ot that size
    				
    				if($break_point_array[$the_count]>= $('#'+$object_array[$the_count]).width() && $break_point_array[$the_count] != 0){
    					console.log("inside break point***********************************************************");
    					console.log($(this).width()+" width****************************************************************")
    					this.style.width=Math.floor($('#'+$object_array[$the_count]).width())+"px";
    					this.style.height=(Math.floor($('#'+$object_array[$the_count]).width())*$percent)+"px";
    					this.style.clear="both";
    				}else{
    					this.style.width=Math.floor($width_array[$arr_count])+"px";
    					this.style.height=(Math.floor($width_array[$arr_count])*$percent)+"px";
    					this.style.clear="none";
    				}
    				
    				
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