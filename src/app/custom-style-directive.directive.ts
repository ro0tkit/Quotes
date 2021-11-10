import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyleDirective]'
})
export class CustomStyleDirectiveDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks() {
    this.textDeco("green")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("Black")
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }
}
