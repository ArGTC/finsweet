import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit, OnDestroy{
  constructor () {

  }
  ngOnInit(): void {
    console.log('ngOnInit','Blog Component');
  }
  ngOnDestroy(): void {
    
  }
}
