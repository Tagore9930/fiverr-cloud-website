import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuOpen = false;
  isClosing = false;

  openMobileMenu() {
    this.mobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.isClosing = true;

    setTimeout(() => {
      this.mobileMenuOpen = false;
      this.isClosing = false;
    }, 350); // match animation duration
  }

}
