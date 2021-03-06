import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { FeedsRepositoryService } from "./services/feeds-repository.services";
import { FeedDetailComponent } from "./feed-detail/feed-detail.component";
import { CommentsComponent } from "../comments/comments.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      { path: "feed/:id/:title", component: FeedDetailComponent }
    ]),
    CommonModule,
    SharedModule
  ],
  declarations: [FeedDetailComponent, CommentsComponent],
  exports: [],
  providers: [HttpClientModule, FeedsRepositoryService]
})
export class FeedsModule {}
