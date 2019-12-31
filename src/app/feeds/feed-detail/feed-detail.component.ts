import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";

import { FeedsRepositoryService } from "../services/feeds-repository.services";
import { FadeIn } from "src/app/shared/animations/fade-in";
// Models
import { Error } from "../models/error.model";
import { Feed } from '../models/feed.model';

@Component({
  selector: "app-feed-detail",
  templateUrl: "./feed-detail.component.html",
  styleUrls: ["./feed-detail.component.scss"],
  animations: [FadeIn]
})
export class FeedDetailComponent implements OnInit {
  feed: Feed = null;
  comments: Array<any> = null;
  commentsAndReplies: Array<any> = null;
  error: Error = null;

  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedsRepoService: FeedsRepositoryService
  ) {}

  ngOnInit() {
    const { id, title } = this.activatedRoute.snapshot.params;
    const url = this.generateFeedURL(id, title);
    this.subscription = this.feedsRepoService
      .getFeedByURL(url)
      .subscribe(feed => {
        if (feed.hasOwnProperty("error")) {
          this.error = {
            status: feed.status,
            message: feed.statusText
          };
        } else {
          this.feed = this.extractData("detail", feed);
          this.comments = this.extractData("comments", feed);
          this.commentsAndReplies = this.getReplies(this.comments);
        }
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

  getReplies(comments: any) {
    return comments.map(comment => {
      return {
        id: comment.data.id,
        author: comment.data.author,
        text: comment.data.body,
        created: comment.data.created,
        score: comment.data.score,
        replies:
          comment.data.replies &&
          comment.data.replies.data &&
          comment.data.replies.data.children
            ? this.getReplies(comment.data.replies.data.children)
            : null
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
