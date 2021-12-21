import './styles.css';
import {TodoList,Todo} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo));


// const tarea = new Todo('Aprender Java');
// const tarea2 = new Todo('Comprar regalo de mamá');
// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);
// crearTodoHtml(tarea);

//para poder guardar nuestra lista de tareas utilizaremos el local Storage, para que cada vez que nosotros actualicemos la página las 
// tareas sigan 

// localStorage.setItem('mi-key','ABC123')   <------------- trabaja sobre la memoria 
// sessionStorage.setItem('mi-key','ABC123'') <---------- Lo guarda en la secdión mientras este abierto el navegador