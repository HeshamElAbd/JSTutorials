/**
 * @Author: Hesham El Abd
 * @Description: A simple JS to do form validation.
 * @Date: 25.08.2019
 */


function formValidate(){
	first_name=document.forms["Form_idx1"]["first_name"].value
	if (first_name.length<1){
		first_name="ghost"
		alert("you have used one letter as your first name, hence you are a ghost")
	}
	last_name=document.forms["Form_idx1"]["last_name"].value
	if(last_name.length<1){
		last_name="ghost"
		alert("you have used one letter as your last name, hence you are a ghost")
	}
	age=document.forms["Form_idx1"]["age"].value
	if(age<2){
		alert("seriously man, you are less than 2 years old")
	} else if(age>160){
		alert("seriously man, you are older than 160 years old")
	}
	user={
			fname:first_name,
			lname:first_name,
			Age:age,
	}
	alert("Your data has been successfully processed")
	return user
}

function printForm(){
	user_info=formValidate();
	document.write("First name is: "+user_info.fname);
	document.write("Last name is: "+user_info.lname);
	document.write("Age is: "+user_info.Age);
	
}
