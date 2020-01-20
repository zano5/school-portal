import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms'
import { ApiService } from 'src/app/backend/api.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent implements OnInit {

  checked;
  indeterminate;
  isLinear: any = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dateVerifier : boolean;

  constructor(private _formBuilder: FormBuilder) {

    
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      idCtrl:['',Validators.required],
      feeCtrl:['', Validators.required],
      dur1Ctrl:['',Validators.required],
      dur2Ctrl:['',Validators.required],
      desCtrl:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      payCtrl: ['', Validators.required],
      dateCtrl: ['', Validators.required]
    });
  }

  submit(){
    console.log(this.firstFormGroup.value.dur1Ctrl);
  }
 
}


