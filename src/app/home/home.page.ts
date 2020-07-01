import { Component } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  })
export class HomePage {
 
  taskName: any = ''; 
  taskList = []; 
 
  constructor() {}
  // タスクを追加する関数
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }
  // タスクを削除する関数
  deleteTask(index) {
  this.taskList.splice(index, 1);
  }
}
