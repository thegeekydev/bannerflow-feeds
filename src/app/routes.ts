import { Routes } from '@angular/router';
import { FeedsComponent } from './feeds/feeds.component';

export const appRoutes: Routes = [
  { path: '', component: FeedsComponent, },
  { path: 'feeds', loadChildren: './feeds/feeds.module#FeedsModule'}
];