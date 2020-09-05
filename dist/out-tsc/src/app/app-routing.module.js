import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    /* {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, */
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'list/:category',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then(m => m.ThemePageModule)
    },
    {
        path: 'videos',
        loadChildren: () => import('./videos/videos.module').then(m => m.VideosPageModule)
    },
    {
        path: 'viewvideo',
        loadChildren: () => import('./viewvideo/viewvideo.module').then(m => m.ViewvideoPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'segment',
        loadChildren: () => import('./segment/segment.module').then(m => m.SegmentPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'skeltoneffect',
        loadChildren: () => import('./skeltoneffect/skeltoneffect.module').then(m => m.SkeltoneffectPageModule)
    },
];
let AppRoutingModule = /** @class */ (() => {
    let AppRoutingModule = class AppRoutingModule {
    };
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
})();
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map