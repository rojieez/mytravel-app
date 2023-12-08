import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'assets/img/boracay.jpg',
    'assets/img/gardens.jpg',
    'assets/img/wall.jpg',
    'assets/img/imperialpalace.jpg',
    'assets/img/mtfuji.jpg',
    'assets/img/gate.jpg',
    'assets/img/bali.jpg',
    'assets/img/hokkaido.jpg',
    'assets/img/xiling.jpg'
  ];

  constructor() {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }
}
