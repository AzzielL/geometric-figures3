function SP(side){
    return side*4;
}
function squarePerimeterCalculate(){
    const numberside=document.getElementById("squareInput");
    const result= parseInt(numberside.value);

    const perimeter = SP(result);
    document.getElementById("SP").innerText= "It's perimeter is " + perimeter + " cm";
}

//Calcular el área del cuadrado
function SA(side){
    return side*side;
}
function squareAreaCalculate(){
    const numberside=document.getElementById("squareInput");
    const result=parseInt(numberside.value);
    
    const area =SA(result);
    document.getElementById("SA").innerText="The Area of the Square is "+area+" cm^2";
}


  /*CALCULO DEl PERIMETRO CIRCULO*/
  function CP(radio){
    return Math.PI*2*radio;
}

function circlePerimeterCalculate(){
    const numberside=document.getElementById("circleInput");
    const result= parseInt(numberside.value);

    const perimeter = CP(result);
    document.getElementById("CP").innerText= "It's perimeter is " + perimeter + " cm";
}

/*Calcular el área del circulo*/
function CA(radio){
    return Math.PI*Math.pow(radio,2);
}
function circleAreaCalculate(){
    const numberside=document.getElementById("circleInput");
    const result=parseInt(numberside.value);
    
    const area =CA(result);
    document.getElementById("CA").innerText="The Area of the circle is "+area+" cm^2";
}

/*Calculo del triangulo*/



function TP (side1, side2, base) {
    return side1 + side2 + base;
}

function trianglePerimeterCalculate() {
    const side1 = parseInt(document.getElementById("triangleInputA").value);
    const side2 = parseInt(document.getElementById("triangleInputC").value);
    const base = parseInt(document.getElementById("triangleInputB").value);

    const perimeter = TP(side1,side2,base);

    document.getElementById("TP").innerText = "Its perimeter is: " + perimeter + " cm.";
}
function TA (base, h) {
    return (base * h) / 2;
}
function triangleAreaCalculate() {
    const base = parseInt(document.getElementById("triangleInputB").value);
    const h = parseInt(document.getElementById("triangleInputD").value);

    const area = TA(base, h);

    document.getElementById("TA").innerText = "Its area is "+area+" cm^2";
}

  function limpiarInput() {
    document.getElementById("squareInput").value="";
    document.getElementById("triangleInputA").value="";
    document.getElementById("triangleInputC").value="";
    document.getElementById("triangleInputB").value="";
    document.getElementById("triangleInputD").value="";
    document.getElementById("circleInput").value="";

  }