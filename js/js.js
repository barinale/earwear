"use strict";
      class slider{
        constructor(item){
          this.item = item;
          this.items = this.settingitems();
          this.position=0;
          this.settingdiplaynone();
          }
        settingitems(){
          return this.item.children;
        }
        settingdiplaynone(){
          for(let i =0;i<this.items.length;i++){
            this.items[i].style.display="none";
          }
        this.items[this.position].style.display="block";

        }
        left(){
          if(this.position==this.items.length-1)
            this.position=0;
            else
          this.position++;

          this.settingdiplaynone(this.position);

        }
        right(position){
          if(this.position=0)
            this.position = this.items.length-1;
            else
            this.position--;
            this.settingdiplaynone(this.position);

        }
      }

const slid = new slider(document.querySelector("#sectionMain .slider"));
let drop = true;
let countDrop =0;
const leftAroow = document.querySelector("#Arrow .left");
  leftAroow.addEventListener("click",(e)=>{
  if(e.target.classList[1]=="left"||e.target.classList[0]=="LeftArrow"){
    slid.left();
    countDrop =0;
    drop="false";

  }});
const rightAroow = document.querySelector("#Arrow .right");
rightAroow.addEventListener("click",(e)=>{
if(e.target.classList[1]=="right"||e.target.classList[0]=="RightArrow"){
  slid.left();
  countDrop =0;
  drop="false";
}
})

setInterval(()=>{
  if(drop=="true"){
slid.left();}
else {
  if(countDrop==3){
    drop="true";
  }
  countDrop++;
}
},5000);
/**slider with button colntroll***/
window.addEventListener('resize', ()=>{
  sldButton.restcolorbutton();
  sldButton.rest();
    sldButton.sizeChange();
})


class sliderButton{
constructor(parent,buttoncontrol=null){
  this.parent = parent;
  this.button = buttoncontrol;
  this.widndowsSize =0;
  this.ArrayPosition=this.calcul();
 this.buttoncontrol();
//  this.makeitemdisplay();
//  this.displayitem(0);
  this.position=0;
  this.restcolorbutton();
  this.rest();
}
left(){
this.parent.style.left="-100px"

}
calcul(){
let ArrayP=[];
for(let i =0;i<this.parent.children.length;i++){
ArrayP.push(this.parent.children[i].getBoundingClientRect().left);
}

return ArrayP;
}
rest(){
  this.parent.style.transition="none";
  this.parent.style.left="0%";
    this.button.children[0].style.background="var(--main-color)";

}
sizeChange(){
  this.ArrayPosition=[];
  this.ArrayPosition = this.calcul();
}
buttoncontrol(){

  for(let i =0;i<this.button.children.length;i++){
    this.button.children[i].addEventListener("click",(e)=>{
        this.parent.style.transition="1s all";
      this.parent.style.left="-"+this.ArrayPosition[this.button.children [i].getAttribute("class")[0]-1]+"px";
      this.restcolorbutton();
      this.button.children[i].style.background ="var(--main-color)";

    })
  }
}
restcolorbutton(){
  for(let i=0;i<this.button.children.length ;i++){
    this.button.children[i].style.background ="var(--secound-color)";
  }

}
/*makeitemdisplay(){
  for(let i =0;i<this.parent.children.length;i++){
    this.parent.children[i].style.display="none";
  }
}
buttoncontrol(){

  for(let i =0;i<this.button.children.length;i++){
    this.button.children[i].addEventListener("click",(e)=>{

      this.displayitem(this.button.children [i].getAttribute("class")[0]-1);

    })
  }
}
displayitem(position){
  if(position>this.position){
          this.makeitemdisplay();
          this.parent.children[position].style.display="inline-block";
        this.parent.children[position].style.animation="itemleft 1s";
this.position = position;


  }else if(position<this.position){
      this.makeitemdisplay();
    this.parent.children[position].style.display="inline-block";
  this.parent.children[position].style.animation="itemleft 1s";
  this.position =  this.position =this.button.children [position].getAttribute("class")[0]-1;
  console.log("2")
  }else{
          this.makeitemdisplay();
    this.parent.children[position].style.display="inline-block";
  this.parent.children[position].style.animation="itemleft 1s";
  this.position =this.button.children [position].getAttribute("class")[0]-1;
  console.log("3")
}

}*/

}
const sldButton = new sliderButton(document.querySelector("#FdBck .FdBckMain .items"),
                                    document.querySelector("#FdBck .controllButton"));

/**Loding page*/

window.addEventListener("load",()=>{
  const loading = document.querySelector(".loading")
  loading.classList +=" hiddenLoading"
})
/*****scrool event********/
const shoppingsection = document.querySelector("#shoppingsection");
const InTchDvc = document.querySelector("#InTchDvc");
const FdBck = document.querySelector("#FdBck");
const SectionVideo = document.querySelector("#SectionVideo");


window.addEventListener('scroll', () =>{
  if(shoppingsection.getBoundingClientRect().top<window.innerHeight){
    shoppingsection.style.top="0";
    shoppingsection.style.opacity="1";
  }

  if(InTchDvc.getBoundingClientRect().top<window.innerHeight){
    InTchDvc.style.top="0";
    InTchDvc.style.opacity="1";
  }

  if(FdBck.getBoundingClientRect().top<window.innerHeight){
    FdBck.style.top="0";
    FdBck.style.opacity="1";
  }
  if(SectionVideo.getBoundingClientRect().top<window.innerHeight){
    SectionVideo.style.top="0";
    SectionVideo.style.opacity="1";
  }
});
