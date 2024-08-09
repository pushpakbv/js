const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const cntlabel = document.getElementById("cntlabel");
let count =0;

increasebtn.onclick = function(){
    count++;
    cntlabel.textContent=count;
}


decreasebtn.onclick = function(){
    count--;
    cntlabel.textContent=count;
}

resetbtn.onclick = function(){
    count=0;
    cntlabel.textContent=count;
}
