document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

let currentIndex=0;

const groups=document.getElementsByClassName("showoff-group");

const handleYes =()=> {
  
  const nextInd=currentIndex+1 <= groups.length-1 ? currentIndex+1:0;

  const currGroup= document.querySelector(`[data-index="${currentIndex}"]`);
        nextGroup=document.querySelector(`[data-index="${nextInd}"]`);
  
  currGroup.dataset.status="after";
  
  nextGroup.dataset.status="active";
  
  currentIndex=nextInd;
}
const handleNo =()=> {
  
  const nextInd=currentIndex-1 >=0? currentIndex-1:groups.length-1;

  const currGroup= document.querySelector(`[data-index="${currentIndex}"]`);
        nextGroup=document.querySelector(`[data-index="${nextInd}"]`);
  
  currGroup.dataset.status="before";
  
  nextGroup.dataset.status="active";
  
  currentIndex=nextInd;
}