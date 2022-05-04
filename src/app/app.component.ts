import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = true;
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
