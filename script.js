window.onload = function () {
    document.getElementById("btn1").addEventListener("click", fibonacci);
    document.getElementById("btn2").addEventListener("click", reset);
}

function fibonacci()
{
    var numbers = [20];
    numbers[0] = 1;
    numbers[1] = 1;
    for(a = 2; a < 20; a++)
    {
        var twoBefore = a - 2;
        var oneBefore = a - 1;
        var nextOne = numbers[twoBefore] + numbers[oneBefore];
        numbers[a] = nextOne;
        
    }

    for(i = 0; i < numbers.length; i ++)
    {
        document.getElementById("output").innerHTML += numbers[i];
        document.getElementById("output").innerHTML += ", ";
    }
    
}

function reset()
{
    document.getElementById("output").innerHTML = "";
}
