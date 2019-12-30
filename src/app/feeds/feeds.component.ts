import { Component, OnInit } from "@angular/core";

import { GlobalVariable } from "src/app/configs/global";
import { FeedsRepositoryService } from "./services/feeds-repository.services";

@Component({
  selector: "app-feeds",
  templateUrl: "./feeds.component.html",
  styleUrls: ["./feeds.component.scss"]
})
export class FeedsComponent implements OnInit {
  feeds: Object = null;
  limits: Array<number> = GlobalVariable.limits;
  limit: number = GlobalVariable.limits[1];
  baseURL = GlobalVariable.BASE_API_URL;

  constructor(private feedsRepoService: FeedsRepositoryService) {}

  ngOnInit() {
    this.getAllFeeds();
  }

  getAllFeeds() {
    this.feeds = null;
    this.feedsRepoService.getFeeds(this.limit).subscribe(feeds => {
      this.feeds = feeds.data;
      console.log(this.feeds);
    });
  }
}
