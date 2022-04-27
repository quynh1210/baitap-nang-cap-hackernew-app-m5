import {Component, OnInit} from '@angular/core';
import {IArticle} from '../IArticle';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  article: IArticle = {
    title: 'a',
    url: 'b'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  addArticle(): void {
    console.log(this.article.title);
    console.log(this.article.url);
  }

  getTitle(value): void {
    this.article.title = value;
  }

  getUrl(value): void {
    this.article.url = value;
  }

}
