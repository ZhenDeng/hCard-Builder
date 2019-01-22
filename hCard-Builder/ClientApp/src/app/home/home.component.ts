import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = "hCard Builder";
  personalDetailsHeader: string = "PERSONAL DETAILS";
  addressSection: string = "ADDRESS";
  preview: string = "HCARD PREVIEW";
  flag: boolean = false;
  outputMessage: string;
  createCard(): void {
    this.outputMessage = "Create hCard Successfully";
  }
}
