import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
