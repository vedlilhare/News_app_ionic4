import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SegmentPage } from './segment.page';
describe('SegmentPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SegmentPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SegmentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=segment.page.spec.js.map