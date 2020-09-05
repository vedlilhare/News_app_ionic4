import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SkeltoneffectPage } from './skeltoneffect.page';
describe('SkeltoneffectPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SkeltoneffectPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SkeltoneffectPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=skeltoneffect.page.spec.js.map