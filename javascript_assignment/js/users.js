$(document).ready(function(){

                $("#form_id").submit(function(e){
              	
		var equation=$("#eq_id").val();
                
	        
		var passed_equation=parser(equation);
                
		alert("returned object"+passed_equation);
                $("#a_id").val(passed_equation.a);
                $("#b_id").val(passed_equation.b);
                $("#c_id").val(passed_equation.c);
                
                $("#draw_button_id").click(function()
                
                {
                  
                 
                passed_equation.a=parseInt($("#a_id").val());
		passed_equation.b=parseInt($("#b_id").val());
                passed_equation.c=parseInt($("#c_id").val());
                passed_equation.x_min_value=parseInt($("#x_min_id").val());
                
                passed_equation.x_max_value=parseInt($("#x_max_id").val());
                
                passed_equation.step_value=parseInt($("#step").val());
                var canvas=$("#canvas_id")[0];
                draw(passed_equation,canvas);
                     

               });
                
               e.preventDefault();
          });

           

});
