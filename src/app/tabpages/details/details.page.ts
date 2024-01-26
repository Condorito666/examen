import {
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  Component,
  OnInit,
} from '@angular/core';
import restaurantData from '../../../assets/data/1.json';
import { isPlatform } from '@ionic/angular';
import { IonContent, IonList } from '@ionic/angular';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {
  data = restaurantData;
  infoExpanded = false;

  activeCategory = 0;
  categorySlidesVisible = false;

  cart = [];
  sum = 0;
  //
  @ViewChild(IonContent) content: IonContent;
  @ViewChildren('barbtn', { read: ElementRef }) btns: QueryList<ElementRef>;
  @ViewChild('bar') bar: ElementRef;
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  listElements = [];
  btnElements = [];
  listenerDisabled = false;

  constructor() {}
  ngOnInit() {
    const headerHeight = isPlatform('ios') ? 44 : 56;
    document.documentElement.style.setProperty(
      '--header-position',
      `calc(env(safe-area-inset-top) + ${headerHeight}px)`
    );
  }

  ngAfterViewInit() {
    this.listElements = this.lists.toArray();
    this.btnElements = this.btns.toArray();
  }

  addToCart(item) {
    this.cart.push(item);
    this.sum = this.cart.reduce((val, item) => (val += item.price), 0);
  }

  selectCategory(index) {
    this.activeCategory = index;
    const btn = this.btnElements[this.activeCategory];
    btn.nativeElement.scrollIntoView({ behavior: 'smooth' });
    const child = this.listElements[index].nativeElement;
    this.listenerDisabled = true;
    this.content.scrollToPoint(0, child.offsetTop - 100, 1000).then((_) => {
      this.listenerDisabled = false;
    });
  }

  onScroll(ev) {
    if (this.listenerDisabled) return;
    const offset = ev.detail.scrollTop;
    this.categorySlidesVisible = offset > 400;
    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        this.activeCategory = i;
        const btn = this.btnElements[this.activeCategory];
        btn.nativeElement.scrollIntoView({ behavior: 'auto' });
        break;
      }
    }
  }
  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top + 100 >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
