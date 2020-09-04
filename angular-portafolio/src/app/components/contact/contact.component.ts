import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  public widthSlider: number;
  public widthToSlider: number;
  public caption: boolean;
  public author: any;

  @ViewChild('viewchild_texto') vc_texto: any;

  constructor() {
    this.caption = true;
    this.widthToSlider = 0;
  }

  ngOnInit(): void {
    const texto: string = (document.querySelector('#texto') as HTMLElement)
      .innerText;
    console.log(
      '%c%s%s',
      'background: red; color:yellow; padding: 0 4px',
      texto,
      '(forma clásica)'
    );
    // Los ViewChild no son visibles hasta el ciclo de vida AfterViewInit
  }

  ngAfterViewInit(): void {
    // console.dir(this.vc_texto);
    const texto2: string = (this.vc_texto as ElementRef).nativeElement
      .innerText;
    console.log(
      '%c%s%s',
      'background: green; color:cyan; padding: 0 4px',
      texto2,
      '(usando ViewChild)'
    );
  }

  loadSlider(): void {
    this.resetSlider();
    setTimeout(() => {
      this.widthToSlider = this.widthSlider;
    });
  }

  resetSlider(): void {
    this.widthToSlider = 0;
  }

  getAuthor(event: any): void {
    // console.log(event);
    this.author = event;
  }
}
