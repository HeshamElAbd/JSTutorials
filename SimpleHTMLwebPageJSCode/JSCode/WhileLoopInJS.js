/**
 * @Author: Hesham El Abd
 * @Description: working with for loops in java script
 * @Date: 24.08.2019
 */
function getInput(){
	// a function to parse user input
	var input=prompt("Please enter you upper limit")
	if(input <1){
		alert("your input is smaller than one. A default of ten will be used")
		input=10
	} else if(input >100){
		alert("your input is bigger than 100. it will be trimed to an upper limit of 100")
		input=100
	} else if(input >1 && input <100 ){
		input=input
	}
	 else{
		alert("unknown input detected please !!!, please try again later.")
		return;
	}
	return input	
}

function onlyEven(upper_limit){
	document.write("<h3 style=\"color:red;\">printing only even numbers: </h3>");
	document.write("<p style=\"color:blue\">")
	while(upper_limit>0){
		if (upper_limit%2==0){
			document.write("current index: "+upper_limit+"<br>");
		}
		upper_limit--;
	}
	document.write("</p>");
}

function DemoFunction(){
	upper_limit=getInput()
	onlyEven(upper_limit)
}
