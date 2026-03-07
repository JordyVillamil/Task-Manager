import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
