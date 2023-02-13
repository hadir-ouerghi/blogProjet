import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import db from '../../assets/json/db.json';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blog: any;
blogId: any;
jsonDataResult: any;  

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.jsonDataResult = db;
    this.blogId= this.activatedRoute.snapshot.paramMap.get('id');
    this.blog = this.jsonDataResult.find((x: { id: any; })=>x.id == this.blogId)
  }

}
