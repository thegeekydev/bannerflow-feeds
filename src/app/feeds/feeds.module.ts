import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { FeedsRepositoryService } from "./services/feeds-repository.services";
import { FeedDetailComponent } from "./feed-detail/feed-detail.component";

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      { path: "feed/:id/:title", component: FeedDetailComponent }
    ])
  ],
  declarations: [FeedDetailComponent],
  exports: [],
  providers: [HttpClientModule, FeedsRepositoryService]
})
export class FeedsModule {}
