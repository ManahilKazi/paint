var TouchEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("Touchdown", my_Touchdown);
    
    function my_Touchdown(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
       

        TouchEvent = "TouchDown";
    }

    canvas.addEventListener("Touchup", my_Touchup);
    function my_Touchup(e)
    {
        TouchEvent = "TouchUP";
    }

    canvas.addEventListener("Touchleave", my_Touchleave);
    function my_Touchleave(e)
    {
        TouchEvent = "Touchleave";
    }

    canvas.addEventListener("Touchmove", my_Touchmove);
    function my_Touchmove(e)
    {

         current_position_of_Touch_x = e.clientX - canvas.offsetLeft;
         current_position_of_Touch_y = e.clientY - canvas.offsetTop;

        if (TouchEvent == "TouchDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_Touch_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_Touch_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_Touch_x;
        last_position_of_y = current_position_of_Touch_y;
    }





