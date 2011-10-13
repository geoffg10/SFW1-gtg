//

var firstDiv = gtg("#accordion .content").elements[0];



var accHeight = gtg(firstDiv).getStyle("height");
/*
console.log(accHeight);

firstDiv.style.height = (parseFloat(accHeight) + 50) + "px";
*/

var ctr = 0;

var duration = 2000;
var time = 0;

var anim = setInterval(function(){
	time += 30;
	
	if(time >= duration){
		clearInterval(anim);
		return false
	};
	
	ctr++;
	firstDiv.style.height = (parseFloat(accHeight) + ctr) + "px";


},30)
