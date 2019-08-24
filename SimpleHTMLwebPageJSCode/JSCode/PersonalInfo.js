/**
 * @Author: Hesham El Abd
 * @Description: a simple demo of the prompt function. 
 * @Date: 24.08.2019
 */
function userInput(){
	var name = prompt("Hi, what is your name?");
	alert("nice to meet you "+name);
	var age=prompt("How old are you?");
	if(age<18){
		alert("sorry man, you are too young");
		return;
	}else if (age>60){
		alert("sorry man you are too old");
		return;
	}else if (age >18 && age<60){
		alert("perfect, it would be great to include you in the study.");
	}else{
		alert("unknow input, please enter your a vaild number");
		return;
	}
	alert("we have you data now, will talk to you later "+ name);
	return name,age;
}