import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  constructor() { }

  public taskList: Task[] = [];

  addTask(){
    this.taskList.push(new Task());
  }

  removeTask(index:number){
    if (index > -1) {
      this.taskList.splice(index, 1);
    }    
  }
}
