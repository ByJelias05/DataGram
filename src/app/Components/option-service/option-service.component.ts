import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-option-service',
  imports: [NgClass],
  templateUrl: './option-service.component.html',
  styleUrl: './option-service.component.css'
})
export class OptionServiceComponent {

  DinamicClass: string = 'Adds'

  OptionsNavigate(options: string){
    this.DinamicClass = options;
  }
}
