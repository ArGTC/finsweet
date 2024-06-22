import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    console.log('HeaderComponent');
  }
  // userList: User[] = [
  //   {
  //     id: 1,
  //     f_name: 'Arman',
  //     l_name: 'Israyelyan',
  //     email: 'text@mail.ru',
  //     age: 25
  //   },
  //   {
  //     id: 2,
  //     f_name: 'Hamlet',
  //     l_name: 'Nalbadyan',
  //     email: 'test@mail.ru',
  //     age: 28
  //   },
  //   {
  //     id: 3,
  //     f_name: 'John',
  //     l_name: 'Debb',
  //     email: 'johnny@mail.ru',
  //     age: 98
  //   }
  // ];
}