import { Component, OnInit } from '@angular/core';
import { EditCategoryPage } from '../edit-category/edit-category.page';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
  standalone: false,
})
export class EditTaskPage implements OnInit {

  tasks: any;
  task: any;
  name: any;
  description: any;
  status: any;
  category: any;
  categories: any = [];


  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.task = JSON.parse(params['special']);
      let cat: any = localStorage.getItem('task')
      if (!cat) {
        cat = '[]';
      }
      this.tasks = JSON.parse(cat);
      console.log(this.tasks);
      for (let index = 0; index < this.tasks.length; index++) {
        const element = this.tasks[index];
        if (element.id == this.task) {
          this.task = element;
          this.name = element.name;
          this.description = element.description;
          this.status = element.status;
          this.category = element.category;
          console.log(this.task);
          break;
        }
      }
    }
    )

    let categories = localStorage.getItem('categories')
    if (categories) {
      this.categories = JSON.parse(categories)
    }

  }


  EditTask() {
    console.log('Edit task clicked:', 'task');
    // Perform edit operation here
    // You can also show a confirmation dialog before editing the task  
    console.log('Edit task:', this.task);
    let task: any = localStorage.getItem('task')
    if (!task) {
      task = '[]';
    }
    this.tasks = JSON.parse(task);
    this.tasks = this.tasks.filter((task: any) => task.id !== this.task.id);
    this.task.name = this.name;
    this.task.description = this.description;
    this.task.status = this.status;
    this.task.category = this.category;
    this.tasks.push(this.task);
    localStorage.setItem('task', JSON.stringify(this.tasks));
    alert('Task updated successfully!');
    this.router.navigateByUrl('tasks');
    
  }

}
