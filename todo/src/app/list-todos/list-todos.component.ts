import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


export class todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,DatePipe,UpperCasePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  todos=[              
    new todo(1,'Learn Angular',false,new Date()),
    new todo(2,'Dance',false,new Date()),
    new todo(3,'Eat',false,new Date())
                                           // This is list of todos
    // {id:1,description:'Learn Angular'},
    // {id:2,description:'Dance'},
    // {id:3,description:'Eat'},

  ]
  // todo={
  //   id:1,
  //   description:'Learn to Dance'     // This is for one todo
  // }
}
