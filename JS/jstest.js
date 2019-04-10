

"use strict";
var count = 0;

function myFunction() {

    var ch = document.getElementsByName("quiz3");
    if(ch[0].checked)
    {
        count++;
    }


}
function myFunction2()
{
    var qu2 =  document.getElementsByName("quiz4");
    if(qu2[2].checked)
    {
        count++;
    }
}
function myFunction3()
{
    var qu3 = document.getElementsByName("quiz");
    if(qu3[2].checked)
    {
        count++;
    }
}
function myFunction4()
{
    var qu4 = document.getElementsByName("quiz1");
    if(qu4[0].checked)
    {
        count++;
    }
}
function myFunction5()
{
    var qu5 = document.getElementsByName("quiz2");
    if(qu5[1].checked)
    {
        count++;
    }
}
function res()
{

    document.getElementById('pop').style.visibility= "visible";
    document.getElementById('rank').innerHTML = count;
}
function closeForm() {
    document.getElementById('pop').style.visibility= "hidden";
}