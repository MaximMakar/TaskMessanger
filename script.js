const body=document.querySelector('body')
const plusButton=document.querySelector('.plus')
const taskWindow=document.querySelector('.newWindow')
const redWindow=document.querySelector('.redWindow')
const basket=document.querySelector(".basket")
const redIcon=document.querySelector(".redIcon")
const tasksList=document.querySelector('.tasksList')
const defferedTaskList=document.querySelector("#deferred")
const activeTaskList=document.querySelector("#actived")
const textName=document.querySelector('.task-name')
const textDesc=document.querySelector('.task-desc')
const datatime=document.querySelector('.task-datatime')

let node_id=0;

basket.style.display="none";

function newTaskFn(){
    taskWindow.classList.toggle('active');
    body.classList.toggle('modal-open');
    textName.value="";
    textDesc.value="";
    datatime.value= Date.getDate + Date.getTime;
}

function redTaskFn(){
    redWindow.classList.toggle('active');
    body.classList.toggle('modal-open');
    datatime.value= Date.getDate + Date.getTime;
}

basket.ondragover=AllowDrop;
defferedTaskList.ondragover=AllowDrop;
activeTaskList.ondragover=AllowDrop;
redIcon.ondragover=AllowDrop;


function AllowDrop(event){
    event.preventDefault();
    basket.style.display="block";
    redIcon.style.display="block";
}

basket.ondrop=dropTask;
defferedTaskList.ondrop=dropDeffered;
activeTaskList.ondrop=dropActive;
redIcon.ondrop=redTaskFn;

function dropTask(event){let itemId=event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    basket.style.display="none";
    redIcon.style.display="none";
}
    
 function redTask(event){let itemId=event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    basket.style.display="none";
    redIcon.style.display="none";
}

function dropDeffered(event){let itemId=event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    defferedTaskList.append(document.getElementById(itemId));
    basket.style.display="none";
    redIcon.style.display="none";
}

 function dropActive(event){let itemId=event.dataTransfer.getData('id');
        console.log(itemId);
        event.target.append(document.getElementById(itemId));
        tasksList.append(document.getElementById(itemId));
        basket.style.display="none";
        redIcon.style.display="none";
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

 


