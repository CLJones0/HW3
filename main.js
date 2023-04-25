let numArray=[2,3,4];

document.addEventListener("DOMContentLoaded", function (event)
{
document.getElementById("first").value=numArray[0];
document.getElementById("second").value=numArray[1];
document.getElementById("third").value=numArray[2];

function cubeEverything()
{
    let outputArray = numArray.map(cubeEach);
    document.getElementById("first").value=outputArray[0];
    document.getElementById("second").value=outputArray[1];
    document.getElementById("third").value=outputArray[2];
}

document.getElementById("cube").addEventListener("click", cubeEverything);

document.getElementById("toTheFourth").addEventListener("click", function ()
{
    let outputArray = numArray.map(fourthEach);
    document.getElementById("first").value=outputArray[0];
    document.getElementById("second").value=outputArray[1];
    document.getElementById("third").value=outputArray[2];
});

});

function squareEverything()
{
    let outputArray = numArray.map(squareEach);
    document.getElementById("first").value=outputArray[0];
    document.getElementById("second").value=outputArray[1];
    document.getElementById("third").value=outputArray[2];
}

function squareEach(i)
{
    return i*i;
}

function cubeEach(i)
{
    return i*i*i;
}

function fourthEach(i)
{
    return i*i*i*i;
}

