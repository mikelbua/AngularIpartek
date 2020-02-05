import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {
  @Input() appSubrayar: string;
  constructor(private element: ElementRef) {
  } //contructor

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.element.nativeElement.style.textDecoration = 'underline';
    this.element.nativeElement.style.backgroundColor = this.appSubrayar;
  }//hostListener

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.textDecoration = 'none';
  }//HelloDirective
} //claas

