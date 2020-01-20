import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms'
import { ApiService } from 'src/app/backend/api.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { NewCourse } from 'src/app/models/new-course';

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
  course: NewCourse;

  public imagePath;
  imgURL: any;
  public message: string;
  private isAdditionalRequirementClicked: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService) { }

  ngOnInit() {
    this.course = new NewCourse();

    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      idCtrl:['',Validators.required],
      feeCtrl:['', Validators.required],
      dur1Ctrl:['',Validators.required],
      dur2Ctrl:['',Validators.required],
      desCtrl:['',Validators.required],
      depCtrl:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      safetyClothing: [''],
      learningMaterial: [''],
      stationary: [''],
      certificate: [''],
      placement: [''],
      certifiedId: [''],
      proofOfResidence: [''],
      registrationFee: [''],
      qualificationLevel: [''],
      // payCtrl: ['', Validators.required],
      // dateCtrl: ['', Validators.required],
      additional: this._formBuilder.array([
        this.addingFields()
      ])
    });
  }

  addingFields(): FormGroup {
    return this._formBuilder.group({
      requirement: ['', Validators.required]
    });

  }

  addNewInputField(): void {

    if(this.isAdditionalRequirementClicked){
      const control = <FormArray>this.secondFormGroup.controls.additional;
      control.push(this.addingFields());
    } else {
      this.isAdditionalRequirementClicked = true;
    }

  }

  removeInputField(i: number): void {
    const control = <FormArray>this.secondFormGroup.controls.additional;
    control.removeAt(i);
  }



  onSubmit() {
    console.log(this.firstFormGroup.value)

    let name = this.firstFormGroup.get('nameCtrl').value;
    let id = this.firstFormGroup.get('idCtrl').value;
    let fees = this.firstFormGroup.get('feeCtrl').value;
    let duration = this.firstFormGroup.get('durCtrl').value;
    let description = this.firstFormGroup.get('desCtrl').value;

    this.course.setCourseName(name);
    this.course.setCourseId(id);
    this.course.setCourseFee(fees);
    this.course.setDescription(duration);
    this.course.setDescription(description);
  }


  secondForm() {
    let safety = this.secondFormGroup.get('safetyClothing').value;
    let learningMaterial = this.secondFormGroup.get('learningMaterial').value;
    let certificate = this.secondFormGroup.get('certificate').value;
    let placement = this.secondFormGroup.get('placement').value;
    let certifiedId = this.secondFormGroup.get('certifiedId').value;
    let registrationfee = this.secondFormGroup.get('registrationFee').value;
    let proofOfResidence = this.secondFormGroup.get('proofOfResidence').value;
    let qualificationLevel = this.secondFormGroup.get('qualificationLevel').value;

    safety? this.course.setReuirements('safety clothing') : '';
    learningMaterial? this.course.setReuirements('learning material') : '';
    certificate ? this.course.setReuirements('certificate') : '';
    placement ? this.course.setReuirements('placement') : '';
    registrationfee ? this.course.setReuirements(registrationfee) : '';
    certifiedId ? this.course.setReuirements('certified id') : '';
    proofOfResidence ? this.course.setReuirements('cv') : '';
    qualificationLevel ? this.course.setReuirements('NQF level 1 or grade 9') : '';

    console.log(this.course)

    for(let item of this.secondFormGroup.value.additional){
      this.course.setReuirements(item.requirement);
    }
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const file = files[0];
    console.log(file)
    const fileName = files[0].name;
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 

    }

    this.course.setImageName(fileName);
    this.course.setImageCover(file);
  }


  uploadCourse(){
    console.log(this.course)

    this._apiService.uploadCourse(this.course).then(results=>{
      console.log(results)
    })
  }
 
}


