import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: false,
})
export class TasksPage implements OnInit {
  tasks: any[] = []
  loading: boolean = true;
  error: string | null = null;
  constructor(
    public route: Router
  ) { }

  ngOnInit() {
    let task = localStorage.getItem('task')

    this.loading = true;
    this.error = null;
    setTimeout(() => {  
      this.loading = false;
      if (task) { 
        this.tasks = JSON.parse(task)
      }
    }
    , 2000);
    

  }


  goToTask(task: any) {
    console.log('Task clicked:', task);

  }

  addTask() {
    this.route.navigate(['/add-task']);
  }

  editTask(id: number) {
    let navigationExtras: any = {
      queryParams: {  
        special: JSON.stringify(id)
      }
    };
    this.route.navigate(['edit-task'], navigationExtras);
  }
  
  deleteTask(task: any) { 
    console.log('Task deleted:', task);
    this.tasks = this.tasks.filter(t => t.id !== task);
    console.log(this.tasks);
    
    localStorage.setItem('task', JSON.stringify(this.tasks));

    this.refreshTasks();

  }



  refreshTasks() {
    let task = localStorage.getItem('task')
    if (task) { 
      this.tasks = JSON.parse(task)
    }
    this.loading = false; 
    this.error = null;
    setTimeout(() => {  
      this.loading = false;
      if (task) { 
        this.tasks = JSON.parse(task)
      }
    }
    , 2000);

  }


}
