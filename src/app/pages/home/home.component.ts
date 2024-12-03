import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  @ViewChild('myInvestInfo', { static: false }) myInvest!: ElementRef<HTMLDivElement>
  @ViewChild('myInvestMoreInfoButton', { static: true }) myInvestMoreInfoButton!: ElementRef<HTMLDivElement>

  showMoreInfo(option: string): void {
    if (option == 'myInvest') {
      this.myInvest.nativeElement.classList.toggle('active');
      this.myInvestMoreInfoButton.nativeElement.classList.toggle('more-info-button-activated');

      const currentText = this.myInvestMoreInfoButton.nativeElement.textContent;
      if (currentText === 'mais informações') {
        this.myInvestMoreInfoButton.nativeElement.textContent = 'fechar informações';
      } else {
        this.myInvestMoreInfoButton.nativeElement.textContent = 'mais informações';
      }
    }
  }
}
