console.log("todor");

var newTodoBtn = document.querySelector('#newToDoBtn');
var list = document.querySelector('#todos');

var addTodo = function() {

  var todoText = document.querySelector('#todoInput').value;
  var newTodoElem = document.createElement('li');
  var textNode = document.createTextNode(todoText);
  newTodoElem.appendChild(textNode);

  // new list item <li>win</li>

  newTodoElem.addEventListener('click', function() {
  newTodoElem.style.textDecoration = "line-through";
  });

//  var list = document.querySelector('#todos');
  list.appendChild(newTodoElem);
  //

};

newToDoBtn.addEventListener('click', addTodo);

// document.getElementById['todos'].getElementByTagName('li');

// var li = document.querySelector('#todos li');

list.addEventListener('click', function(event) {
  console.log('something clicked');
  console.log(event);
  console.log(event.target);
  // event.target.style.textDecoration = 'line-through';
  // event.target.className = 'done';
  if (event.target.className  === 'done') {
    event.target.className = "";
  } else {
    event.target.className = 'done';
  }
});
