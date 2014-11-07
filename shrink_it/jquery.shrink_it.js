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
	var $final_percent_array= new Array();
	var $child_count=0;
	var $count_flag= true;
	$.fn.shrink_it= function(options){
		/**************variables****************
		* level =   under development. Trying to determine best way to implement
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
		
		/********************************************************************
		*sets up all the variables that are used
		*
		*********************************************************************/
		var $object = settings.parent;
		var $level = settings.level;
		var $break_point_array = settings.break_points.split(",");
		var $object_array = $object.split(",");
		var $stretch_array = settings.stretch.split(",");
		var $width_array = new Array();
		var $height_array = new Array();
		var $number_children_array = new Array();
		var $height_count = 0;
		
		var $width=0;
		
		
		if($count_flag){
			childCount();
		}
		parse();
		/********************************************************************
		*Parse
		*
		*
		*********************************************************************/
		function parse(){
			
			$count =0;
			
			$arr_count=0;
		
			while($arr_count < $object_array.length){	
			
			
					$('#'+$object_array[$arr_count]).children().each(function () {
    					
    					console.log(this + "  current parent object this is here "+ $object_array[$arr_count]);
    					//console.log(this.width+ " this is width "+ this.height);
    					console.log("******************************* flag---->"+ $flag);
    					if($(this).parent().width()< this.width){
    						$width=$(this).parent().width();
    					}else{
    						$width= this.width;
    					}
    					console.log($final_percent_array.length+ " ------ "+$arr_count + " ------ "+ $flag+ "---"+($child_count) );
    					$height_array[$height_count]=$width+":"+this.height;
    					if($flag){
    						console.log("*********************should only be here once******************************")
    						
    						if($final_percent_array.length==($child_count) && $arr_count ==0 && $flag){
    							console.log("************** setting flag");
    							$flag=false;
    						}
    						$final_percent_array[$height_count]= this.height/$width;
						}
						$count++;
						
						$height_count++;
						console.log("--------- "+ $height_count);
					});
			
				$number_children_array[$arr_count]= $count;
				console.log($("#"+$object_array[$arr_count]).width()+ " <-- object width --> "+$object_array[$arr_count] );
				
				if($break_point_array[$arr_count]>= $('#'+$object_array[$arr_count]).width() && $break_point_array[$arr_count] != 0){
					console.log("inside break point 2***********************************************************");
					if($stretch_array[$arr_count]==0){
						console.log("*******************this is it**************************");
						//$width_array[$arr_count]=this.width;
						$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width();
					}else{
						$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width();
					}
				}else{
					
					//$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width()/$count;
					$width_array[$arr_count]=$("#"+$object_array[$arr_count]).width()/$number_children_array[$arr_count];
				}
				
				
				changeSize($arr_count);
				
				$arr_count++;
			}
		
			$height_count=0;
		}
		/********************************************************************
		*Change Size
		*
		*variables: takes in $the_count  returns:none modifies:each object on 
		*passed into the $object_array
		*********************************************************************/
		function changeSize($the_count){
			
			
				$('#'+$object_array[$the_count]).children().each(function () {
    				
					$percent_count = $height_count -$number_children_array[$the_count];   
							
    				$percent = $final_percent_array[$percent_count];
    				
    			
    				//check if break point is set.
    				if($break_point_array[$the_count]>= $('#'+$object_array[$the_count]).width() && $break_point_array[$the_count] != 0){
    				
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
    			
    				
    				
    			
    				 
    				
    				this.style.cssFloat ="left";
    				$count++;
    				
				});
				
			
			$count =0;
			
			$width_array.length= 0;
			
		}
		/********************************************************************
		*Change Size
		*Counts all children elements from the id's passed in for elements
		*variables:none  only sets the variable $child_count
		*********************************************************************/
		function childCount(){
			var $temp_count=0
			while($temp_count < $object_array.length){
				$('#'+$object_array[$temp_count]).children().each(function () {
					$child_count++;
					
				});
				$temp_count++;
			}
			//set count flag to false so we only count children elements once
			$count_flag=false;
		}
		
	}  
 }(jQuery));