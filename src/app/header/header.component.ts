import { Component, input } from '@angular/core';
import {
  CommonModule, DatePipe, LowerCasePipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault, SlicePipe, TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import {User} from "../../app/models/user";
@Component({
  selector: 'app-header',
  standalone: true,
  // imports: [NgFor, NgIf, NgSwitch,
    // NgSwitchCase, NgSwitchDefault, NgClass, NgStyle],
  imports: [RouterLink,RouterLinkActive],
  // imports: [UpperCasePipe],
  // imports: [UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe, SlicePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  text: string = 'hello world';
  date: Date = new Date();

  constructor() {
    console.log('HeaderComponent');
  }
  arr: string[] = ['List item 1', 'List item 2', 'List item 3'];
}
