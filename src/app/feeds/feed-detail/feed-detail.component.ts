import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FeedsRepositoryService } from "../services/feeds-repository.services";

@Component({
  selector: "app-feed-detail",
  templateUrl: "./feed-detail.component.html",
  styleUrls: ["./feed-detail.component.scss"]
})
export class FeedDetailComponent implements OnInit {
  feed: object = null;
  comments: Array<any> = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedsRepoService: FeedsRepositoryService
  ) {}

  ngOnInit() {
    const { id, title } = this.activatedRoute.snapshot.params;
    const url = this.generateFeedURL(id, title);
    this.feedsRepoService.getFeedByURL(url).subscribe(feed => {
      this.feed = this.extractData("detail", feed);
      this.comments = this.extractData("comments", feed);
    });
  }

  extractData(type: string, feed: Array<any>): any {
    let extractedData = null;
    switch (type) {
      case "detail":
        extractedData = feed[0].data.children[0].data;
        break;
      case "comments":
        extractedData = feed[1].data.children;
      default:
        break;
    }
    return extractedData;
  }

  generateFeedURL(id: string, title: string): string {
    let url = `r/sweden/comments/${id}/${title}.json`;
    return url;
  }
}
