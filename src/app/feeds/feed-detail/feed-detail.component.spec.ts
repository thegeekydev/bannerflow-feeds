import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { FeedDetailComponent } from "./feed-detail.component";
import { FeedsRepositoryService } from "../services/feeds-repository.services";
import { SpinnerLoaderComponent } from "src/app/shared/spinner-loader/spinner-loader.component";
import { CommentsComponent } from "src/app/comments/comments.component";

describe("FeedDetailComponent", () => {
  let component: FeedDetailComponent;
  let fixture: ComponentFixture<FeedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [
        FeedDetailComponent,
        SpinnerLoaderComponent,
        CommentsComponent
      ],
      providers: [HttpClientModule, FeedsRepositoryService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
