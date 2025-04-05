import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Gestionar Categorias', url: '/categorys', icon: 'home' },
    { title: 'Gestionar Tareas', url: '/tasks', icon: 'add-circle' },
    
  ];

  constructor(
    
  ) {}
}
