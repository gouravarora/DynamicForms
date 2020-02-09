import { Component, OnInit, Input, ViewChildren, ComponentFactoryResolver, ComponentRef, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlHostDirective } from 'src/app/shared/control-host.directive';
import { ControlService } from 'src/app/shared/control.service';

@Component({
  selector: 'app-renderform',
  templateUrl: './renderform.component.html',
  styleUrls: ['./renderform.component.scss']
})
export class RenderformComponent implements OnInit {

  @Input() data;
  formgroupInstance: FormGroup;

  @ViewChildren('p', {read: ViewContainerRef}) controlHost: QueryList<ControlHostDirective>;
  //@ViewChildren('ng-template') controlHost;
  //@ViewChild('p', {static: true}) host: ControlHostDirective;

  constructor(private formbuilder: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver, private controlService: ControlService) { }

  ngOnInit() {
    this.formgroupInstance = this.formbuilder.group(this.data.items.reduce((fb, obj) => {
      fb[obj.label.toLowerCase] = [];
      return fb;
    }, {}));
  }

  ngAfterViewInit(){
    this.renderComponents();
    // this.controlHost.changes((a) => {
    //   console.log(a)
    // })
  }

  renderComponents(){
    this.controlService.getControlsArray(this.data)
    .forEach((obj, i) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(obj.component);
      const viewContainerRef = this.controlHost['_results'][i];
      //this.host.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      setTimeout(() => (<any>componentRef.instance).data = obj.data);
    }) 
  }
}
