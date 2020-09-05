import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VideosPage } from './videos.page';
describe('VideosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(VideosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=videos.page.spec.js.map