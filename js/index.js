// Your code goes here
var tmp = {};//I Hold textContent Removed From Browser
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
    this.style.right = '1rem';
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
  console.log(this.parentNode.childNodes[3].textContent);
}

let signUp = function(){
  key = this.parentNode.childNodes[3];
  height = this.parentNode.childNodes[3].offsetHeight;
  form = createForm(height);

  if(key.hasAttribute('style')){
    key.className ="";
    form.className = 'hidden';
  } else{
    this.parentNode.replaceChild(form,key);
    key.className = "hidden";
    this.textContent = 'Never Mind!';
  }
}

let noDefault = function(){
  event.preventDefault();
  console.log(tmp)
}

eventTypes('div.destination > .btn','click',signUp);//Begin Client Conversion
eventTypes('div img','dblclick',dblClick);//Pop Images
eventTypes('body','keydown',keyDown);//Change Color of <h1> Char on Char down
eventTypes('nav > a','click',noDefault);//Prevent Nav Link Defaults
//eventTypes('window','resize',test);//FOR SURE DOES NOT WORK
//eventTypes('window','load',events);
//eventTypes('window','resize',events);
//eventTypes('window','load',events);
//eventTypes('window','resize',events);
//eventTypes('window','load',events);
//eventTypes('window','resize',events);




let createForm = function(height){
  form = document.createElement('form');
  formElementLabel = document.createElement('label');
  formElementLabel.for = 'email';
  formElement = document.createElement('input');
  formElement.type = 'text';
  formElement.name = 'email';
  form.style.height = height + 'px';
  form.appendChild(formElement);
  return form;
  
}