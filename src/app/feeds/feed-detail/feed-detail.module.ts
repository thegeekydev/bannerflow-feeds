import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FeedsRepositoryService } from "../services/feeds-repository.services";
import { FeedDetailComponent } from "./feed-detail.component";

@NgModule({
  imports: [HttpClientModule],
  declarations: [FeedDetailComponent],
  exports: [FeedDetailComponent],
  providers: [HttpClientModule, FeedsRepositoryService]
})
export class FeedDetailModule {}
