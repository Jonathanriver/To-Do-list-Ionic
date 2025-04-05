import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: false,
})
export class AddTaskPage implements OnInit {
  title: string= '';
  description: string= '';
  status: string= '';
  cate: any= '';
  category: []= [];

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
    let categoria = localStorage.getItem('categories')
    if (categoria) {
      this.category = JSON.parse(categoria)
    }
    
  }

  AddTask() { 
    let task = localStorage.getItem('task')
    let tasks = []
    if (task) {
      tasks = JSON.parse(task)
    }
    let newTask = {
      id: tasks.length + 1,
      name: this.title,
      description: this.description,
      status: this.status,
      category: this.cate
    }
    tasks.push(newTask)
    localStorage.setItem('task', JSON.stringify(tasks))
    
    this.route.navigate(['/tasks']);


  }

}
