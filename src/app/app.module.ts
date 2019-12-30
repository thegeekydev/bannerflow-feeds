import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Routes
import { appRoutes } from "./routes";
// Modules
import { FeedsModule } from "./feeds/feeds.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
// Components
import { AppComponent } from "./app.component";
import { FeedsComponent } from "./feeds/feeds.component";

@NgModule({
  declarations: [AppComponent, FeedsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FeedsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
