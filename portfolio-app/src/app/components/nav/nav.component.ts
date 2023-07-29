import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public scrollService: ScrollService) {}

  scrollToSection(anchor: string): void {
    this.scrollService.scrollToAnchor(anchor);
  }
}
