import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FeedsComponent } from "./feeds.component";
import { FeedsRepositoryService } from "./services/feeds-repository.services";
import { SpinnerLoaderComponent } from '../shared/spinner-loader/spinner-loader.component';
import { CommentsComponent } from '../comments/comments.component';

describe("FeedsComponent", () => {
  let component: FeedsComponent;
  let fixture: ComponentFixture<FeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, RouterModule],
      declarations: [FeedsComponent, SpinnerLoaderComponent, CommentsComponent],
      providers: [HttpClientModule, FeedsRepositoryService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
