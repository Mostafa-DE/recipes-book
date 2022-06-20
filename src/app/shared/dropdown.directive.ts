import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {

  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }


}
