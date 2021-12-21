import { Todo} from './todo.class';

export class TodoList{

    
    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id){
        this.todos= this.todos.filter(todo => todo.id != id )
        this.guardarLocalStorage();

    }
    marcarCompletado(id){
        for (const todo of this.todos){
            if (todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }
    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado  )
        this.guardarLocalStorage();
    }
        // Al desile que cre un JSON.stringfisy le estoy diciendo que cree un jason perfecto ya que si solo le paso
    // la información no estaría guardando como objetos  objet objet
    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify (this.todos))
    }
    cargarLocalStorage(){


        this.todos = (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')):[];
        // this.todos = (localStorage.getItem('todo'))? localStorage.getItem('todo'):[];
        // La funcion map permite barrer un arreglo completo y retornar cada uno de sus objetos mutados 
        this.todos = this.todos.map(obj => Todo.fromJson(obj) );
    }
    
}