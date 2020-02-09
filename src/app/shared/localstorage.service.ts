import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveForm(formObj){
    return new Observable<any>((observer) => {
      let savedForms
      try{
        savedForms = JSON.parse(localStorage.getItem('savedForms'));
      }catch(e) {
        observer.error({
          "message": "Invalidstorage"
        })
      }
      if(Array.isArray(savedForms)){
        savedForms.push(JSON.stringify(formObj))
      }else{
        savedForms = JSON.stringify([formObj]);
      }
      localStorage.setItem('savedForms', savedForms)
      observer.next({
        "status": "Success"
      })
    })
  }

  getAllForms(){
    return new Observable<any>((observer) => {
      let savedForms;
      try{
        savedForms = JSON.parse(localStorage.getItem('savedForms'));
      }catch(e) {
        observer.error({
          "message": "Invalidstorage"
        })
      }
      observer.next(savedForms);
    });
  }

  updateForm(id, obj){
    return new Observable<any>((observer) => {
      let savedForms
      try{
        savedForms = JSON.parse(localStorage.getItem('savedForms'));
      }catch(e) {
        observer.error({
          "message": "Invalidstorage"
        })
      }
      const formToUpdate = savedForms.findIndex((form) => form.id === id);
      savedForms[formToUpdate] = obj;
      localStorage.setItem('savedForms', savedForms)
      observer.next({
        "status": "Success"
      })
    })
  }
}
