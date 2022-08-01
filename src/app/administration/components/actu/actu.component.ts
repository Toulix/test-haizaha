import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.scss']
})
export class ActuComponent implements OnInit {

  posts: any;

  currentRoute!: string;

  constructor(public activatedRoute: ActivatedRoute,
              public service: NewsService) { }

  ngOnInit(): void {
    this.currentRoute = this.activatedRoute?.snapshot?.url[0]?.path;

    this.service.getPosts()
                .subscribe(response => {
                  this.posts = response;
                });
   }


}
