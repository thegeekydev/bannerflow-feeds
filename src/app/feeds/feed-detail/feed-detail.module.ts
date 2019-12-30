import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FeedsRepositoryService } from "../services/feeds-repository.services";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  exports: [],
  providers: [HttpClientModule, FeedsRepositoryService]
})
export class FeedDetailModule {}
