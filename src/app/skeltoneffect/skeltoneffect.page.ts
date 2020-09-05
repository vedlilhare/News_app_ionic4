import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeltoneffect',
  templateUrl: './skeltoneffect.page.html',
  styleUrls: ['./skeltoneffect.page.scss'],
})
export class SkeltoneffectPage implements OnInit {
  items: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    setTimeout(() => {
      this.items = [
        { city: 'Berlin', country: 'Germany', population: '3.5 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' },
        { city: 'Buenos Aires', country: 'Argentina', population: '15 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' },
        { city: 'Madrid', country: 'Spain', population: '3.3 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' },
        { city: 'New York', country: 'USA', population: '19.5 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' },
        { city: 'Paris', country: 'France', population: '2.2 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' },
        { city: 'Sydney', country: 'Australia', population: '5.4 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' },
        { city: 'Tokyo', country: 'Japan', population: '9.2 million', image: 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg' }
      ];
    }, 2500);
  }

}
