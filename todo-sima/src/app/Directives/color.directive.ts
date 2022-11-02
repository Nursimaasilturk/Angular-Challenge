import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  @Input() appColor: string | undefined;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appColor;
  }
}
