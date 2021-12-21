
import { Todo } from '../classes';
import { todoList } from '../index';
import '../css/componentes.css';


const divTodoLista       = document.querySelector('.todo-list');
const txtInput           = document.querySelector('.new-todo');
const btnBorrarCompletos = document.querySelector ('.clear-completed');
const ulFiltros          = document.querySelector('.filters')

export const crearTodoHtml =(todo) =>{
    const htmlTodo=
    `<li class="${(todo.completado)?"completed":''}" data-id='${todo.id}'>
        <div class="view">
            <input class="toggle" type="checkbox"  ${(todo.completado)?"checked":""}/>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>

        </div>
        <input class="edit" value="Create a TodoMVC template"/>
    </li>`;


    const div = document.createElement('div');
    div.innerHTML= htmlTodo;
    divTodoLista.append(div.firstElementChild);
    return div.firstElementChild;
}


//Eventos 
txtInput.addEventListener('keyup',(event)=>{
if (event.keyCode === 13 && txtInput.value.length >0 ){
    const  nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    txtInput.value='';

}
});

divTodoLista.addEventListener('click',(event)=>{
 
 const nombreElemento = (event.target.localName);
 const todoElemento = event.target.parentElement.parentElement;
 const todoId        = todoElemento.getAttribute('data-id');
 if (nombreElemento.includes('input')){
     todoList.marcarCompletado(todoId);
     todoElemento.classList.toggle('completed');
 }
 else if (nombreElemento.includes('button')){
     todoList.eliminarTodo(todoId);
     divTodoLista.removeChild(todoElemento);
 }
});

btnBorrarCompletos.addEventListener('click',()=>{
    todoList.eliminarCompletados();
    for (let i = divTodoLista.children.length -1 ; i>= 0 ; i--){
        const elemento =  divTodoLista.children[i];


        if (elemento.classList.contains('completed')){
            divTodoLista.removeChild(elemento);
        }
    }

  
   });

   ulFiltros.addEventListener('click',(event)=>{

     const filtro = event.target.text;
        if(!filtro) {return;}
        for (const elemento of divTodoLista.children){
           elemento.classList.remove('hidden');
            const completado = elemento.classList.contains('completed');

            if (filtro =='Pendientes'&& completado!=false ){
                 elemento.classList.add('hidden')
               
            }
            else if(filtro =='Completados'&& completado!=true ){
                elemento.classList.add('hidden')
            }
            else if(filtro =='Todos'){
                elemento.classList.remove('hidden');
            }
        }
   });