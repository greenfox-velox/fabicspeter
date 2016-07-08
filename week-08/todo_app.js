'use strict'

var button1 = document.querySelector('.button-text');
var input = document.querySelector('.textinput')
var list_element = document.querySelector('ul')
var xhr = new XMLHttpRequest();
console.log(input.type)

function get_todo_list(){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var data_list = JSON.parse(xhr.responseText);
    data_list.forEach(function(e, i) {
      console.log(e);
      console.log(i);
      var newTodo = document.createElement('p');
      newTodo.classList.add(".action-field");
      newTodo.innerHTML = ('<p-class="task>">') + data_list[i].text
      input.appendChild(newTodo)
    });
  };
  xhr.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos');
  xhr.send();
}

function add_new_todo_element() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var data_list =JSON.parse(xhr.responseText);
    var newTodo = document.createElement('p');
    // newTodo.classList.add("todo-item")
    newTodo.innerHTML = '<p-class="task>">' + data_list[i].text
    newTodo.setAttribute('data_list-id', data_list.id);
    input.appendChild(newTodo)
  };
  var the_new_todo = {
    text: texInput.value
  };
  xhr.open('POST', 'https://mysterious-dusk-8248.herokuapp.com/todos');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(the_new_todo));
}


button1.addEventListener('click', get_todo_list);
