import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListformComponent } from './listform/listform.component';


@NgModule({
  declarations: [ListformComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListformComponent
  ]
})
export class ListformsModule { }
