import { Component } from '@angular/core';
import { LocalstorageService } from './shared/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private readonly localStoarge: LocalstorageService){
    
  }
}
