import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from  '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  contactForm: FormGroup;
  submitted=false;

  constructor( private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
  
    this.contactForm = this.formBuilder.group({
      fname: ['',[Validators.required]],  
      lname:['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      comment: ['',[Validators.required]]

    });
  }
  get f() { return this.contactForm.controls; }

  OnSubmit() {
  this.submitted=true;

      console.log('Your form data : ', this.contactForm.value);
      
  }

}
