import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'philippines',
    loadChildren: () => import('./philippines/philippines.module').then( m => m.PhilippinesPageModule)
  },
  {
    path: 'japan',
    loadChildren: () => import('./japan/japan.module').then( m => m.JapanPageModule)
  },
  {
    path: 'southkorea',
    loadChildren: () => import('./southkorea/southkorea.module').then( m => m.SouthkoreaPageModule)
  },
  {
    path: 'china',
    loadChildren: () => import('./china/china.module').then( m => m.ChinaPageModule)
  },
  {
    path: 'indonesia',
    loadChildren: () => import('./indonesia/indonesia.module').then( m => m.IndonesiaPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
