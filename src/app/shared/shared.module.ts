import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SpinnerLoaderComponent } from "./spinner-loader/spinner-loader.component";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SpinnerLoaderComponent,
    BrowserAnimationsModule
  ],
  declarations: [SpinnerLoaderComponent],
  providers: []
})
export class SharedModule {}
