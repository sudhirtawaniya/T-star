var search=document.getElementById("inputsearch");
var leftform=document.getElementsByClassName("leftform")[0];
var changemode=document.getElementsByClassName("changemode")[0];

function inputsearchclick(){
	//document.getElementById("inputsearch").style.transition = "all 0.2s";
search.style="width:400px";
}
function inputsearchout(){
	search.style="width:250px";
}
function forgetpassword(){
	var name=document.getElementsByClassName("form-group")[0];
	var cmt=document.getElementsByClassName("changemodetxt")[0];
	var username=document.getElementsByTagName("input")[1];
	var mainlogo=document.getElementsByClassName("mainlog")[1];
	var cpassword=document.getElementsByClassName("form-group")[3];
	var fp=document.getElementsByClassName("fp")[0];
	var leftform=document.getElementsByClassName("leftform")[0];
var rightform=document.getElementsByClassName("rightform")[0];
	if(changemode.innerHTML=="Sign-up"){
		changemode.innerHTML="Log-in";
	

	name.style.display = "block";
	name.style.visibility = "visible";
	username.style.marginTop="0px";
	mainlogo.style.display = "none";
	cmt.innerHTML="Already have an account ";
	
cpassword.style.display = "block";
fp.style.display = "none";
cpassword.style.visibility = "visible";
cpassword.style.opacity= "1";
if(screen.width>=767){

rightform.style.borderBottomLeftRadius="15px"; 
rightform.style.borderBottomRightRadius="0px"; 
rightform.style.borderTopRightRadius="0px"; 
rightform.style.borderTopLeftRadius="15px"; 
	leftform.style.borderBottomLeftRadius="0px"; 
leftform.style.borderBottomRightRadius="15px"; 
leftform.style.borderTopRightRadius="15px"; 
leftform.style.borderTopLeftRadius="0px"; 
	rightform.style.borderRight="0px solid black"; 
	rightform.style.borderLeft="2px solid black"; 

leftform.overflow="hidden";
leftform.style.transform ="translate(100%)";
rightform.style.transform ="translate(-100%)";


}
	}
	else{
		changemode.innerHTML="Sign-up";
		

	name.style.display = "none";
	
	username.style.marginTop="32px";
	mainlogo.style.display = "block";
	cmt.innerHTML="Don't have an account ";
	
cpassword.style.display = "none";
fp.style.display = "block";

if(screen.width>=767){

	rightform.style.borderBottomLeftRadius="0px"; 
rightform.style.borderBottomRightRadius="15px"; 
rightform.style.borderTopRightRadius="15px"; 
rightform.style.borderTopLeftRadius="0px"; 
	leftform.style.borderBottomLeftRadius="15px"; 
leftform.style.borderBottomRightRadius="0px"; 
leftform.style.borderTopRightRadius="0px"; 
leftform.style.borderTopLeftRadius="15px"; 

rightform.style.borderRight="2px solid black"; 
	rightform.style.borderLeft="0px solid black"; 	

leftform.overflow="hidden";
leftform.style.transform ="translate(0%)";
rightform.style.transform ="translate(0%)";
//on git
//on comment branch
//on change on comment branch
	}
}
}