import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { log } from 'util';

@Directive({
  selector: '[appHoverAdd]'
})
export class HoverAddDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input("appHoverAdd") overlayType: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.overlay(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.overlay(false);
  }

  private overlay(overlayPresent: boolean): void {
    if (overlayPresent) {
      this.renderer.addClass(this.el.nativeElement, this.overlayType);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.overlayType);
    }
  }
}
