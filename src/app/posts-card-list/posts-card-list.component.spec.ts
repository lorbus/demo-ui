import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {PostsCardListComponent} from './posts-card-list.component';

describe('PostsCardListComponent', () => {
  let component: PostsCardListComponent;
  let fixture: ComponentFixture<PostsCardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostsCardListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
