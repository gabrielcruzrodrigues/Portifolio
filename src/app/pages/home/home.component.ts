import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SocialComponent } from '../../components/social/social.component';

@Component({
  selector: 'app-home',
  imports: [SocialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  @ViewChild('myInvestInfo', { static: false }) myInvest!: ElementRef<HTMLDivElement>
  @ViewChild('myInvestMoreInfoButton', { static: true }) myInvestMoreInfoButton!: ElementRef<HTMLDivElement>
  
  @ViewChild('minhaCasaInfo', { static: false }) minhaCasaInfo!: ElementRef<HTMLDivElement>
  @ViewChild('minhaCasaMoreInfoButton', { static: true }) minhaCasaMoreInfoButton!: ElementRef<HTMLDivElement>

  myInvestUrlVideo: SafeResourceUrl;
  minhacasaUrlVideo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const videoId = 'n4BmiD2IX20';
    this.myInvestUrlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    const minhaCasaId = 'uuN6oJvt7sA';
    this.minhacasaUrlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${minhaCasaId}`);
  }

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

    if (option == 'minhaCasa') {
      this.minhaCasaInfo.nativeElement.classList.toggle('active');
      this.minhaCasaMoreInfoButton.nativeElement.classList.toggle('more-info-button-activated');

      const currentText = this.minhaCasaMoreInfoButton.nativeElement.textContent;
      if (currentText === 'mais informações') {
        this.minhaCasaMoreInfoButton.nativeElement.textContent = 'fechar informações';
      } else {
        this.minhaCasaMoreInfoButton.nativeElement.textContent = 'mais informações';
      }
    }
  }
}
