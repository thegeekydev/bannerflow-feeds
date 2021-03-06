import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { FeedsRepositoryService } from "./feeds-repository.services";
import { feedOne, feedTwo } from "../mock-data/feeds";
import { GlobalVariable } from "src/app/configs/global";

describe("Feeds repository service", () => {
  let httpTestingController: HttpTestingController;
  let service: FeedsRepositoryService;

  const feeds = [feedOne, feedTwo];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeedsRepositoryService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(FeedsRepositoryService);
  });

  describe("getFeeds", () => {
    it("should call get method to retrieve all feeds with the correct URL", () => {
      service.getFeeds(2, {}).subscribe(feeds => {
        expect(feeds[1].author).toEqual("joni");
      });
      const req = httpTestingController.expectOne(
        `${GlobalVariable.BASE_API_URL}r/sweden.json?limit=2`
      );
      req.flush(feeds);
      httpTestingController.verify();
    });
  });

  describe("getFeedByURL", () => {
    it("should call get method to retrieve the feed data with the correct URL", () => {
      let url = `r/sweden/comments/1/test-1.json`;

      service.getFeedByURL(url).subscribe(data => {
        expect(data.author).toEqual("morteza");
      });

      const req = httpTestingController.expectOne(
        `${GlobalVariable.BASE_API_URL}${url}`
      );
      req.flush(feeds[0]);
      httpTestingController.verify();
    });
  });
});
