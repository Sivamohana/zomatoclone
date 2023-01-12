
function display(num)  {
document.calculator.txtbox.value = document.calculator.txtbox.value + num;  
}


function calculate()
{
var exp = document.calculator.txtbox.value;
try{
    if(exp)
    {
        document.calculator.txtbox.value = eval(exp)
    }
}catch(err)
{

    alert("Invalid data");
}
}

function backspace()
{
var exp = document.calculator.txtbox.value;
document.calculator.txtbox.value = exp.substring(0, exp.length - 1); 
}


