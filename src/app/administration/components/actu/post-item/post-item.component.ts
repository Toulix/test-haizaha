import { Router } from '@angular/router';
import { Post } from './../../../../models/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  post!: Post;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewPostDetail(id: number) {
    this.router.navigate(['administration/actu', id]);
  }

}
