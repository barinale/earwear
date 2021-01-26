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
const leftAroow = document.querySelector("#Arrow .left");
  leftAroow.addEventListener("click",(e)=>{
  if(e.target.classList[1]=="left"||e.target.classList[0]=="LeftArrow"){
    slid.left();
  }});
const rightAroow = document.querySelector("#Arrow .right");
rightAroow.addEventListener("click",(e)=>{
if(e.target.classList[1]=="right"||e.target.classList[0]=="RightArrow"){
  slid.left();
}
})
