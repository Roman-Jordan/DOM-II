// Your code goes here


function eventTypes(selector,eventType,cb){
  let element = document.querySelectorAll(selector);
  element.forEach(x => {
    x.addEventListener(eventType,cb);
  });
}

let dblClick = function (){
  if(this.style.position !== 'fixed'){
    this.style.position = 'fixed';
    this.style.top = '25%';
    this.style.left = '1rem';
    this.style.right = '2rem';
    this.style.width = "90%";
    this.style.margin = 'auto';
  }else{
    this.removeAttribute("style");
  }
}

let keyDown = function (){
  let query = document.querySelector('h1.logo-heading').textContent;
  let key = String(event.key);//query = query.toLowerCase;
  query.includes(key) ? console.log(true):false;
}

let test = function(){
  console.log(this);
}

eventTypes('div.destination > .btn','click',test);
eventTypes('div img','dblclick',dblClick);
eventTypes('body','keydown',keyDown);
//eventTypes('window','resize',events);
//eventTypes('window','load',events);
//eventTypes('window','resize',events);
//eventTypes('window','load',events);
//eventTypes('window','resize',events);
//eventTypes('window','load',events);
//eventTypes('window','resize',events);




