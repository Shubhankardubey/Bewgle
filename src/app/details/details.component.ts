import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs';
import { score} from '../module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  data: any;
  img: any;
  price: any;
  latestReviewDate: any;
  latestReview: any;
  domain: any;
  name: any;
  title: any;
  sourceCategory: any;
  product_id: any;
  createdAt: any;
  reviewCount: any;
  topScores: any;
  createdAtDate: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getJSON().
    subscribe(data => {
                console.log(data.imageUrl);
                this.img=data.imageUrl;
                this.price=data.price;
                this.latestReview=new Date(data.latestReviewDate);
                this.latestReviewDate = this.latestReview.getDate() + '-' + (this.latestReview.getMonth() + 1) + '-' + this.latestReview.getFullYear()
                this.domain= data.domain;
                this.name= data.name;
                this.title= data.title;
                this.sourceCategory=data.sourceCategory;
                this.product_id = data.product_id;
                this.createdAt= new Date(data.createdAt);
                this.createdAtDate = this.createdAt.getDate() + '-' + (this.createdAt.getMonth() + 1) + '-' + this.createdAt.getFullYear()
                this.reviewCount=data.reviewCount;
                this.topScores=data.topScores;
console.log(this.topScores);
            });

  }

}
