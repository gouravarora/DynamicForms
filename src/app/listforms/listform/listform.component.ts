import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.scss']
})
export class ListformComponent implements OnInit {

  @Input()
  items;

  @Output() editForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() renderForm: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  dispatchEdit(event){
    this.editForm.emit(event);
  }

  dispatchRender(event){
    this.renderForm.emit(event);
  }

}
