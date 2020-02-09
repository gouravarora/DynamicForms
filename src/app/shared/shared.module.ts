import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlHostDirective } from './control-host.directive';
import { TextComponent } from './text/text.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [ControlHostDirective, TextComponent, RadioComponent, SelectComponent, CheckboxComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    CommonModule
  ],
  exports: [
    ControlHostDirective
  ],
  entryComponents: [
    RadioComponent,
    CheckboxComponent,
    SelectComponent,
    TextComponent
  ]
})
export class SharedModule { }
