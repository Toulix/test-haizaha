import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  currentRoute!: string;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute = this.activatedRoute?.snapshot?.url[0]?.path;
   }

}
