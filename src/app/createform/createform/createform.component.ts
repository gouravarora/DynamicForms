import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { LocalstorageService } from 'src/app/shared/localstorage.service';

const FIELD_NEED_EXTRAS = [
  'radio',
  'checkbox',
  'selection'
]

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit {

  private formcreater: FormGroup;
  private needExtras: Array<boolean> = [];
  private formToUpdate;
  private formToRender;

  savedForms: any;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly localstorageService: LocalstorageService) { 
         
              }

  ngOnInit() {
    this.getSavedForms();
  }

  createControl(){
    return this.formBuilder.group({
      label: ['', Validators.required],
      type: ['', Validators.required],
      extras: this.formBuilder.array([])
    })
  }

  addAControl(){
    (<FormArray>this.formcreater.get('items')).controls.push(this.createControl());
  }
  createExtra(){
    return this.formBuilder.group({
      value: ['', Validators.required],
      label: ['', Validators.required]
    })
  }

  addExtra(i){
    (<FormArray>(<FormArray>this.formcreater.get('items')).controls[i].get('extras')).push(this.createExtra());
  }

  changeControlType(i, $event){
    this.needExtras[i] = FIELD_NEED_EXTRAS.indexOf($event.value) > -1;
    (<FormArray>this.formcreater.get('items')).controls[i].patchValue({type: $event.value});
  }

  saveForm() {
    if(this.formcreater.valid){
      this.localstorageService.saveForm(Object.assign({id: (Math.random()*1000).toFixed()}, this.formcreater.value))
      .subscribe((res) => {
        console.log(res);
        this.formcreater = null;
        this.getSavedForms()
      }, (error)=> {
        console.log('Showing some error');
      });
    }
  }

  getSavedForms(){
    this.localstorageService.getAllForms()
    .subscribe(data => {
      this.savedForms = data;
    }, (error) => {
      console.log('Showing some errors');
    });
  }

  editForm(event){
    this.createForm();
    this.formcreater.patchValue(event);
    this.formToUpdate = event.id;
  }

  updateForm(){
    this.localstorageService.updateForm(this.formToUpdate, this.formcreater.value)
    .subscribe((res) => {
      console.log(res);
      this.formcreater = null;
      this.getSavedForms()
    }, (error)=> {
      console.log('Showing some error');
    });
  }

  renderForm(event){
    this.formToRender = event;
  }

  createForm(){
    this.formcreater = this.formBuilder.group({
      name: [''],
      items: this.formBuilder.array([this.createControl()])
    });
  }

}
