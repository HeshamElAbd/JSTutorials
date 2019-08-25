/**
 * @Author: Hesham El Abd
 * @Description: a simple Demo for Object construction in JS using Object literals
 * @Date: 25.08.2019
 */

var Employee={name:"bob",
	age: 45,
	section: "R&D",
	salary: 160,
	print: function(){
		return "Name: "+this.name+", section: "+this.section;
	}}
function print(){
	document.write(Employee.print())
}
