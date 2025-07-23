import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Controle para dropdowns abertos
  openDropdown: 'roupas' | 'acessorios' | null = null;

  toggleDropdown(menu: 'roupas' | 'acessorios') {
    if (this.openDropdown === menu) {
      this.openDropdown = null;
    } else {
      this.openDropdown = menu;
    }
  }

  closeDropdown() {
    this.openDropdown = null;
  }
}
