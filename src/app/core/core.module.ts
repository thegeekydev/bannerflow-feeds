import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  imports: [],
  exports: [HeaderComponent, SidebarComponent],
  declarations: [HeaderComponent, SidebarComponent],
  providers: []
})
export class CoreModule {}
