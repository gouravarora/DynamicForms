import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateformComponent } from './createform/createform.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms';
import { ListformsModule } from '../listforms/listforms.module';
import { RenderformComponent } from './renderform/renderform.component';
import { SharedModule } from '../shared/shared.module';

const routes = [{
  path: '', component: CreateformComponent
}]

@NgModule({
  declarations: [CreateformComponent, RenderformComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ListformsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SharedModule
  ]
})
export class CreateformModule { }
