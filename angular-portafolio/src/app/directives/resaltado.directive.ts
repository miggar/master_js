import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  constructor(elementRef: ElementRef) {
    // console.log(elementRef.nativeElement);
    const el: HTMLElement = elementRef.nativeElement;
    el.style.backgroundColor = 'black';
    el.style.padding = '20px';
    el.style.margin = '15px 0';
    el.style.color = 'white';
    el.style.textTransform = 'uppercase';
  }
}
