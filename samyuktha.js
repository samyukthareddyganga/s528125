
function buy()
{
  var graduate = document.getElementById("grad").value;
  var prereq = document.getElementById("pre").value;
  var health = document.getElementById("health");

  var aid = document.getElementById("aid");

 
 var result = document.getElementById("res");

if(graduate>0 || prereq>0)
{ 
  health.value=480;
   aid.value= 1200;
 var myResult=(graduate*540)+(prereq*480)+480+1200;
 result.value=myResult;

   document.getElementById("alert").innerHTML="Thank you...!";

}
else{
  document.getElementById("alert").innerHTML="Please select you courses...!";
}
}

