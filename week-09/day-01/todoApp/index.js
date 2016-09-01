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
  console.log('csacsi');
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
    newCheckbox.setAttribute('checked');
    document.querySelector('.task-wrapper[data-id="' + id + '"]').firstChild.classList.add('checked-out');
  }
}

function createListOfTodos(input) {
  for (var i = 0; i < input.length; i++) {
    newTaskWrapper(input[i]['id'], input[i]['text'], input[i]['completed']);
  }
  getAllCheckbox();
  console.log('todo');
}
function addHtml(element) {
  var newTodo = document.createElement('div');
  newTodo.classList.add('taskholder');
  newTodo.innerHTML = '<div class="todo-item">' + element.text + '</div> <div class="buttons"> <button class="delete" type="button" id=' + 'd' + element.id + '></button> <input class="check" type="checkbox" id=' + 'c' + element.id + '></input> </div>';
  newTodo.setAttribute('id', 'task' + element.id);
  todolist.appendChild(newTodo);
  newTodo.querySelector('#d' + element.id).addEventListener('click', deleteTask);
  newTodo.querySelector('#c' + element.id).addEventListener('click', chkTask);
  var checked = newTodo.querySelector('.check');
  var checkdb = false;
  if (element.completed === 1) {
    checkdb = true;
  } else if (element.completed === 0) {
    checkdb = false;
  }
  checked.checked = checkdb;
  inputField.value = '';
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
//   }
//   xhr.open(httpMethod, endpoint)
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(postDataToBackend);
// }
// getXhrResponse('GET', '/someendpoint', function(err, res) {});

function addTodo(){
  var xhr = new XMLHttpRequest();
  var inputText = document.querySelector('input').value;
  var inputValue = {"text": inputText};
  xhr.onload = function(){
    document.querySelector('input[type="text"]').value = '';
    getTodos();
    getAllDeleteButton();
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify(inputValue));
}

function deleteTodo(){
  var id = this.parentElement.getAttribute('data-id');
  var elementToDelete = this.parentElement;
  var xhr = new XMLHttpRequest();
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
    status = 1;
  } else {
    status = 0;
  }
  var statusUpdate = JSON.stringify({'completed': status});
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    // var resp = JSON.parse(xhr.response);
  }
  xhr.open('PUT', url +  id);
  console.log(id);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(statusUpdate);
}

addButton.addEventListener('click', addTodo);
window.onload = function() {
  getTodos();
}
