import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardtemplatePage } from './cardtemplate.page';

describe('CardtemplatePage', () => {
  let component: CardtemplatePage;
  let fixture: ComponentFixture<CardtemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardtemplatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardtemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
