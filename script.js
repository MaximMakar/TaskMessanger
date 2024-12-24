const body=document.querySelector('body')
const plusButton=document.querySelector('.plus')
const taskWindow=document.querySelector('.newWindow')
const basket=document.querySelector(".basket")
const redIcon=document.querySelector(".redIcon")

let tasksList=document.querySelector('.tasksList')
let defferedTaskList=document.querySelector("#deferred")
let activeTaskList=document.querySelector("#actived")
let textName=document.querySelector('.task-name')
let textDesc=document.querySelector('.task-desc')
let datatime=document.querySelector('.task-datatime')
let node_id=0;

basket.style.display="none";

function newTaskFn(){
    taskWindow.classList.toggle('active');
    body.classList.toggle('modal-open');
    textName.value="";
    textDesc.value="";
    datatime.value= Date.getDate + Date.getTime;
}

function redTaskFn(TaskName,TaskDate,TaskDesc){
    taskWindow.classList.toggle('active');
    body.classList.toggle('modal-open');
    textName.value="";
    datatime.value= Date.getDate + Date.getTime;
}

basket.ondragover=AllowDrop;
defferedTaskList.ondragover=AllowDrop;
activeTaskList.ondragover=AllowDrop;



function AllowDrop(event){
    event.preventDefault();
    redIcon.style.display="block";
    basket.style.display="block";
}

basket.ondrop=dropTask;
redIcon.ondrop=redTask;
defferedTaskList.ondrop=dropDeffered;
activeTaskList.ondrop=dropActive;


function dropTask(event){let itemId=event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    redIcon.style.display="none";
    basket.style.display="none";
}
    
 function redTask(event){let itemId=event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    redIcon.style.display="none";
    basket.style.display="none";
}

function dropDeffered(event){let itemId=event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    defferedTaskList.append(document.getElementById(itemId));
    redIcon.style.display="none";
    basket.style.display="none";
}

 function dropActive(event){let itemId=event.dataTransfer.getData('id');
        console.log(itemId);
        event.target.append(document.getElementById(itemId));
        tasksList.append(document.getElementById(itemId));
        redIcon.style.display="none";
        basket.style.display="none";
    }   

function appendActiveTask(){
    let liNew = document.createElement('li');
    liNew.setAttribute("draggable",'true')
    node_id++;
    let idval="task"+( node_id);
    liNew.innerHTML=("<span class='node_desc'>id задачи: "+idval+" </span>"+"<p class='node_text'> Название задачи: "+textName.value+"</p>"+"<p class='node_text'> Описание: "+textDesc.value+"</p>"+"<span  class='node_desc'> Выполнить до: "+datatime.value.slice(0,10)+" "+datatime.value.slice(11,16)+"</span>");
    liNew.setAttribute("id",idval)
    tasksList.append(liNew);
    document.getElementById(idval).ondragstart=drag;
    newTaskFn()
}



function drag(event){event.dataTransfer.setData('id', event.target.id)}

 


