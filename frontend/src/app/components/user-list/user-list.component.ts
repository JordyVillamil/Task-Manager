import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements AfterViewInit {
  // DataSource para la tabla de Angular Material
  dataSource = new MatTableDataSource<User>([]);

  // Columnas de la tabla
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private userService: UserService) {}

  // Al cargar el componente, pedimos los usuarios
  ngAfterViewInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.dataSource.data = data,
      error: (err) => console.error('Error al cargar usuarios', err)
    });
  }
}
