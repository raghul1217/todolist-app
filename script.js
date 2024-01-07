const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ''){
        alert('enter some text');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.append(span);
    }
    inputbox.value = '';
    savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else{
        e.target.parentElement.remove();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function displaydata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

displaydata();
