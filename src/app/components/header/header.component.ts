import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  @ViewChild('hamburger', { static: false }) hamburguer!: ElementRef<HTMLDivElement>
  @ViewChild('nav', { static: false }) nav!: ElementRef<HTMLDivElement>

  onHamburgerClick(): void {
    this.nav.nativeElement.classList.toggle('active');
  }
}
