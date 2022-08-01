import { NewsService } from './../../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './../../../../models/post';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-item-detail',
  templateUrl: './post-item-detail.component.html',
  styleUrls: ['./post-item-detail.component.scss']
})
export class PostItemDetailComponent implements OnInit {

  postDetail$!: Observable<Post>;

  constructor(private activatedRoute: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit(): void {
    this.postDetail$ = this.activatedRoute.paramMap
                                  .pipe(
                                    switchMap(params => {
                                      
                                      const idString = params.get('id')
                                      let id = parseInt(idString as string);

                                      return this.newsService.getSinglePost(id);
                                    })
                                    )
                                }
                    }
