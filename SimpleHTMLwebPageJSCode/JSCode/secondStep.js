/**
 * @Author: Hesham El Abd
 * @Description: A simple illustration of a JS functions and variables
 * @Data: 24.08.2019
 */
function multiply(a,b){
	// The function multiply two numbers by each other.
	return a*b
}
function printVar(x){
	// the function print a variables
	document.write("<h4 style=\"color:red\"> The variable has value of: <i>" +
			""+x+"</i></h4>");
}

var a=2 ;// Variable declaration 
var b= 4 ;// please notice the variables are not typed like java and C++
var c="I love Java scripts";
document.write("<p> a variable named c has been declaraed with type string. It is value is : </p>")
printVar(c);
document.write("<p> Now, the value and the type of the variable c changes," +
		" first the type becomes number instead of string  and the value " +
		"becomes 8</p>")
c=multiply(a,b); // 
printVar(c);
document.write("******************** End of the JS tutorial **************")






