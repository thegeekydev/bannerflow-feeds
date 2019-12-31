import { Component, OnInit } from "@angular/core";
const slugify = require("@sindresorhus/slugify");

import { GlobalVariable } from "src/app/configs/global";
import { FeedsRepositoryService } from "./services/feeds-repository.services";
import { FadeIn } from "../shared/animations/fade-in";

@Component({
  selector: "app-feeds",
  templateUrl: "./feeds.component.html",
  styleUrls: ["./feeds.component.scss"],
  animations: [FadeIn]
})
export class FeedsComponent implements OnInit {
  feeds: Object = null;
  limits: Array<number> = GlobalVariable.limits;
  limit: number = GlobalVariable.limits[1];
  baseURL = GlobalVariable.BASE_API_URL;
  pagination: Object = null;

  constructor(private feedsRepoService: FeedsRepositoryService) {}

  ngOnInit() {
    this.getAllFeeds();
  }

  getAllFeeds() {
    this.feeds = null;
    this.feedsRepoService
      .getFeeds(this.limit, this.pagination)
      .subscribe(feeds => {
        this.feeds = feeds.data;
      });
  }

  onChangeLimit(limit: string) {
    this.limit = +limit;
    this.getAllFeeds();
  }

  changePagination(type: string, id: string) {
    this.pagination = {
      type,
      id
    };

    this.getAllFeeds();
  }

  slugTitle(title: string): string {
    return slugify(title);
  }
}
