import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description : string,
    public done : boolean,
    public targetDate: Date
  ){
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo[];
  message:string;
  // todos = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Become an expert in angular',false,new Date()),
  //   new Todo(3,'Visit India',false,new Date())
  // ]
  constructor(private todoService:TodoDataService, private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos("in28minutes").subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(username:string,id:number){
    this.todoService.deleteTodo("in28minutes",id).subscribe(
      response =>{console.log("response:"+response);
      this.message = `Delete of Todo ${id} successfull`;
      this.refreshTodos();
    }
    );
    //console.log(username)
  }
  updateTodo(id:string){
    this.router.navigate(["todo",id]);
    console.log(id);
  }

  addTodo(){
    this.router.navigate(["todo",-1]);
  }

}
