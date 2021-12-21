import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputOnlyLetters]',
})
export class InputOnlyLettersDirective {
  private allowedCharsRegExp = /^[a-zA-Z-]*$/;
  private disallowedCharsRegExp = /[^a-zA-Z-]/g;
  private inputRef: HTMLInputElement;
  constructor(elementRef: ElementRef) {
    this.inputRef = elementRef.nativeElement;
  }

  @HostListener('keypress', ['$event'])
  public keyPress(event: KeyboardEvent): boolean {
    return this.allowedCharsRegExp.test(event.key);
  }

  @HostListener('paste', ['$event'])
  public paste(event: ClipboardEvent): void {
    event.preventDefault();
    const data = event.clipboardData?.getData('text/plain');
    if (data) {
      this.inputRef.value = data.replace(this.disallowedCharsRegExp, '');
    }
  }
}
