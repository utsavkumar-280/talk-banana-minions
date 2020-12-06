var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
 
const clickHandler = ()=>{
  console.log("clicked!!");
  console.log('value is=',txtInput.value);

};

btnTranslate.addEventListener("click",clickHandler);
