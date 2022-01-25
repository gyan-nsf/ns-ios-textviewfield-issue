import { Component, ElementRef, ViewChild } from '@angular/core'
import { TextField } from '@nativescript/core';
@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('textField') textField: ElementRef<TextField>;

  textFiledVisibility : boolean = true;

  veryLongText : string= `
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
    I am very looong text
  `;


  constructor() {
  }

  onToggleBtnTap() {
    this.textFiledVisibility = false;
    setTimeout(() => {
      this.textFiledVisibility = true;
    }, 500);
  }
  onDoneBtnTap() {
    const _textField = this.textField.nativeElement;
    _textField.dismissSoftInput();
    // _textField.resetNativeView();
  }
}
