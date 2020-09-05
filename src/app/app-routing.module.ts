import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
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
    loadChildren: () => import('./theme/theme.module').then( m => m.ThemePageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'viewvideo',
    loadChildren: () => import('./viewvideo/viewvideo.module').then( m => m.ViewvideoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'segment',
    loadChildren: () => import('./segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'skeltoneffect',
    loadChildren: () => import('./skeltoneffect/skeltoneffect.module').then( m => m.SkeltoneffectPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'cardtemplate',
    loadChildren: () => import('./cardtemplate/cardtemplate.module').then( m => m.CardtemplatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
