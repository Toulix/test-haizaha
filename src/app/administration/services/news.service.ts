import { Post } from './../../models/post';
import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = 'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';

  constructor(private httpClient: HttpClient) {}

  getPosts(){
    return this.httpClient.get(this.url);
  }

  getSinglePost(id: number) {
    return this.httpClient
                .get<Post>(`http://jsonplaceholder.typicode.com/photos/${id}`)
  }
 
}
