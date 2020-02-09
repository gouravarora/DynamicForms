import { Injectable } from '@angular/core';
import { TextComponent } from './text/text.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { ControlItem } from './ControlType'

const CONTROL_COMPONENTS = {
  'text': TextComponent,
  'number': TextComponent,
  'radio': RadioComponent,
  'checkbox': CheckboxComponent,
  'selection': SelectComponent
}

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }

  getControlsArray(data) {
    return data.items.map((controlObj) => {
      return new ControlItem(CONTROL_COMPONENTS[controlObj.type], controlObj);
    });
  }
}
