import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout/layout.component';

// DEFINE THE MAIN ROUTES FOR THE APPLICATION
const routes: Routes = [
  // REDIRECT EMPTY PATH TO 'HOME' ROUTE
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    // DEFAULT PATH
    path: '',
    // MAIN LAYOUT COMPONENT THAT WRAPS AROUND THE CHILD ROUTES
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((e) => e.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((e) => e.AboutModule),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./modules/pricing/pricing.module').then(
            (e) => e.PricingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
