import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ThemePage } from './theme.page';
describe('ThemePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThemePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ThemePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=theme.page.spec.js.map