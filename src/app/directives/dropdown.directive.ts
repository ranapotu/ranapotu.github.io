import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor() {}

  @HostListener('click') toggleShow() {
    this.isOpen = !this.isOpen;
  }
}
