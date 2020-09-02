import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public widthToSlider: number;
  public caption: boolean;

  constructor() {
    this.caption = true;
    this.widthToSlider = 0;
  }

  ngOnInit(): void {}

  loadSlider(): void {
    this.widthToSlider = this.widthSlider;
  }

  resetSlider(): void {
    this.widthToSlider = 0;
  }
}
