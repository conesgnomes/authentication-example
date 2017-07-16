import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

const appRoutes: Routes = [
  {
    path: 'private',
    component: PrivateComponent
  },
  {
    path: 'public',
    component: PublicComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
