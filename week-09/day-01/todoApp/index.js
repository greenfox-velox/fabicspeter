'use strict';

var addButton = document.querySelector('button');
var listOfTodos = document.querySelector('div.todo-list');
var url = 'http://localhost:3000/todos/'
function getAllDeleteButton() {
  var removeButton = document.querySelectorAll('div.trash');

  for (var i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', deleteTodo);
  }
}

function getAllCheckbox() {
  var checkboxes = document.querySelectorAll('.todo-list input');

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', checkOutTodo);
  }
}

function newTaskWrapper(id, text, completed) {
  var newTodo = document.createElement('div');
  newTodo.classList.add('task-wrapper', 'flex-horizontal');
  newTodo.setAttribute('data-id', String(id));
  newTodo.setAttribute('data-completed', String(completed));

  newTodo.innerHTML = '<div class="todo-item"></div><div class="trash flex-vertical"><i class="fa fa-trash-o" aria-hidden="true"></i></div><input type="checkbox" class="checker"></input>';

  listOfTodos.appendChild(newTodo);
  newTodo.firstChild.textContent = text;

  var newCheckbox = document.querySelector('.todo-list .task-wrapper[data-id="'+ String(id) +'"] input');

  if (String(completed) === 'true') {
    newCheckbox.setAttribute('checked', '');
    document.querySelector('.task-wrapper[data-id="' + id + '"]').firstChild.classList.add('checked-out');
  }
}

function createListOfTodos(input) {
  for (var i = 0; i < input.length; i++) {
    newTaskWrapper(input[i]['id'], input[i]['text'], input[i]['completed']);
  }
}

function getTodos() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    listOfTodos.innerHTML = '';
    createListOfTodos(JSON.parse(xhr.response));
    console.log(JSON.parse(xhr.response));
    getAllDeleteButton();
  }

  xhr.open('GET', url);
  xhr.send();
}
// function getXhrResponse(httpMethod, endpoint, postDataToBackend, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     callback(null, res);
//     var res = JSON.parse(xhr.response)

  // }
//
//   xhr.open(httpMethod, endpoint)
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(postDataToBackend);
//
// }
// getXhrResponse('GET', '/tododsdffsdfsd', function(err, res) {});

function addTodo(){
  var xhr = new XMLHttpRequest();
  var inputText = document.querySelector('input').value;
  var inputValue = {"text": inputText};
  xhr.onload = function(){
    document.querySelector('input[type="text"]').value = '';
    getTodos();
    getAllDeleteButton();
    getAllCheckbox();
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify(inputValue));
  // console.log(JSON.stringify(inputValue));
}

function deleteTodo(){
  var id = this.parentElement.getAttribute('data-id');
  var elementToDelete = this.parentElement;
  var xhr = new XMLHttpRequest();
  console.log(id);
  xhr.onload = function(){
    getTodos();
  }
  xhr.open('DELETE', url + id);
  xhr.setRequestHeader('accept', 'application/json');
  xhr.send({});
}

function checkOutTodo(){
  var elementToCheck = this.parentElement;
  var id = elementToCheck.getAttribute('data-id');
  var status = elementToCheck.getAttribute('data-completed');
  if (String(status) === 'true') {
    status = false;
  } else {
    status = true;
  }
  var contentText = elementToCheck.firstChild.textContent;
  var statusUpdate = {
    "text": contentText,
    "completed": status
  }
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    var resp = JSON.parse(xhr.response);
    getTodos();
  }

  xhr.open('PUT', url +  String(id));
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(toString(statusUpdate));
}

addButton.addEventListener('click', addTodo);

window.onload = function() {
  getTodos();
}
