import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeUrl',
  standalone: false,
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private readonly sanitizer: DomSanitizer) {
    // constructor is empty
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
