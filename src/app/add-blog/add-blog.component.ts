import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import db from '../../assets/json/db.json';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    content: new FormControl(''),
    upVotes: new FormControl(''),
    downVotes: new FormControl(''),
  });
  submitted = false;
  jsonDataResult: any;


  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.jsonDataResult = db;
    console.log('--- First Way of jsonDataResult :: ', this.jsonDataResult);
    this.form = this.formBuilder.group(
      {
        id:[],
        title: ['', Validators.required],
        author: ['',Validators.required],
        content: ['',Validators.required],
        upVotes:[],
        downVotes:[],
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {

      return;
    }
    this.jsonDataResult.push(this.form.value)
    this.router.navigate(['']); 
    console.log(JSON.stringify(this.form.value));
  }
  }


function uuid(): any {
  throw new Error('Function not implemented.');
}
  /*createContactForm(){
    this.contactForm = this.formBuilder.group({
      title: ['',  Validators.required],  
      author: ['',  Validators.required],
      content: ['', Validators.required]
    });
  }
  get f(){
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
      console.log('Your form data : ', this.contactForm.value );
  }*/


