import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[subrayado]'
})
export class HelloDirective {
  @Input() subrayado: string;
  constructor(private element: ElementRef) {
  } //contructor
  @HostListener('mouseenter')
  public onMouseEnter() {
    this.element.nativeElement.style.textDecoration = this.subrayado;
    this.element.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave')
  public onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.textDecoration = 'none';
    this.element.nativeElement.style.color = 'black';
  }
} //HelloDirective

