//your JS code here. If required.
let para=document.getElementById("status");
document.getElementById("enterBtn").addEventListener("click",function(){
	let heading=document.createElement("h1");
	heading.innerText="Entered the Metaverse";
	para.innerText="";
	para.appendChild(heading);
});