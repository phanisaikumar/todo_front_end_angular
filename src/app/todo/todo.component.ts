import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoDataService, private route : ActivatedRoute) {}
  todo: Todo;
  id:number;
  ngOnInit() {
    this.todo = new Todo(1,"",false,new Date());
    this.id = this.route.snapshot.params['id'];
    this.todoService
      .retrieveTodo("in28minutes", this.id)
      .subscribe(data => {
        this.todo = data;
        //console.log("data",data);
      })
  }
  saveTodo(){
    this.todoService.updateTodo("in28minutes",this.id,this.todo).subscribe(data=>{console.log(data)})
  }
}
