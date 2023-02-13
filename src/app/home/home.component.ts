import { Component, OnInit } from '@angular/core';
import db from '../../assets/json/db.json';
/*type db = Array<{ id: string;
  title: string;
  content: string;
  author: string; }>;*/

interface DB {
  id: string;
  title: string;
  content: string;
  author: string;
  upVotes: number;
  downVotes: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jsonDataResult: any; 
  searchText: any;
 
  constructor() { 
  }

  ngOnInit(): void {
    this.jsonDataResult = db;
    console.log('--- First Way of jsonDataResult :: ', this.jsonDataResult);
    
  }
  incrementUpVotes(jsonDataResult: any): void {
    jsonDataResult.upVotes++

  }
  incrementDownVotes(jsonDataResult: any): void {

    jsonDataResult.downVotes++
  }
  getColor(upVotes: number, downVotes: number): string {
		if (upVotes < downVotes ) {
			return 'rgb(255, 0, 0)';
		}  else {
			return 'rgb(0, 255, 0)';
		}
	}
 


}
