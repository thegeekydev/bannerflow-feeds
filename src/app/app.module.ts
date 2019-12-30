import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedsModule } from './feeds/feeds.module';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FeedsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
