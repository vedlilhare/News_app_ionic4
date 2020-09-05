import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewvideoPage } from './viewvideo.page';
describe('ViewvideoPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewvideoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewvideoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=viewvideo.page.spec.js.map