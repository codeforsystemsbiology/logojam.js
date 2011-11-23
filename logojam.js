if(!org) {
    var org = {};
    if(!org.systemsbiology)
        org.systemsbiology = {};
    if(!org.systemsbiology.visualization)
        org.systemsbiology.visualization = {};
}

org.systemsbiology.visualization.logojam = function(container,options) {
	this.containerElement = container;
	this.textstyle = "font-size:20;font-family:'helvetica neue';";
	this.svgNS = "http://www.w3.org/2000/svg";
	this.svg = document.createElementNS(this.svgNS, "svg:svg");
	this.svg.setAttribute("height", options.height);
    this.svg.setAttribute("width", options.width);
	this.containerElement.innerHTML="";
	this.containerElement.appendChild(this.svg);
}



org.systemsbiology.visualization.logojam.prototype.drawLetter=function (letter,color,scaleY,x,y){ 
	var text = document.createElementNS(this.svgNS, "svg:text");
    text.setAttributeNS(null, "x", x);
    text.setAttributeNS(null, "y", y);
    text.setAttributeNS(null, "fill", color);
    text.setAttributeNS( null, "style", this.textstyle);
    text.setAttributeNS( null, "transform","scale(1 " + scaleY +")" );
    text.appendChild(document.createTextNode(letter));
    this.svg.appendChild(text);
}