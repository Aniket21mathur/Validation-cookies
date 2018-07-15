
function validateform(){

	var username=document.forms["theform"]["Username"].value;
	var mail=document.forms["theform"]["email"].value;
	var password=document.forms["theform"]["Password"].value;
	var conf=document.forms["theform"]["confirm"].value;
	var ph=document.forms["theform"]["Phone"].value;
	var date=document.forms["theform"]["DOB"].value;
	var cty=document.forms["theform"]["city"].value;


//validate username
var illegalChars = /\W/;
if(illegalChars.test(username))
{
document.getElementById('e-username').innerHTML="The username contains illegal characters.Use only letters,numbers and underscore.";
return false;
}
else if (username.length < 5 || username.length > 15) 
{
	document.getElementById('e-username').innerHTML="The username length should be between 5 and 15.";
	return false;
}
	document.getElementById('e-username').innerHTML="";


//validate email
var illegalChars1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(illegalChars1.test(mail)==false)
{
document.getElementById('e-email').innerHTML="Invalid Email Address";
return false;
}
	document.getElementById('e-email').innerHTML="";


//validate password
var illegalChars2=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(!password.match(illegalChars2))
{
	document.getElementById('e-password').innerHTML="Enter a valid password of length between 7 to 15 and must contain atleast one numeric digit and a special char.";
	return false;

}
	document.getElementById('e-password').innerHTML="";


//confirm password
var illegalChars3=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(!conf.match(illegalChars3))
{
	document.getElementById('e-confirm').innerHTML="You r smart but try smthng diff.";
	return false;

}

else if (conf!=password) 
{
		document.getElementById('e-confirm').innerHTML="passwords do not match.";
		return false;

}
	document.getElementById('e-confirm').innerHTML="";


//validate phone number
var stripped = ph.replace(/[\(\)\.\-\ ]/g, '');
if(isNaN(parseInt(stripped)))
{
	document.getElementById('e-number').innerHTML="The phone number contains illegal characters.";
	return false;
}

else if(stripped.length!==10)
{
	document.getElementById('e-number').innerHTML="Enter a 10 digit phone number.";
	return false;
}	
	document.getElementById('e-number').innerHTML="";


//validate date
var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
if (!pattern.test(date)) 
{
	document.getElementById('e-DOB').innerHTML="Write date in DD/MM/YYYY format.";
	return false;

}
	document.getElementById('e-DOB').innerHTML="";


//validate city
var illegalChars4=/^[^0-9\#\$\@\+]*$/;
if (!illegalChars4.test(cty)) 
{
	document.getElementById('e-text').innerHTML="Write a valid city name.";
	return false;

}
	document.getElementById('e-text').innerHTML="";


return true;
}