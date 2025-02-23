import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Tag} from '../model/tag';
import {PostsService} from '../service/posts.service';
import {LoadingService} from '../loading/loading.service';

@Component({
  selector: 'post',
  templateUrl: './search-tags.component.html',
  styleUrls: ['./search-tags.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchTagsComponent implements OnInit {
  searchResults$: Observable<Tag[]>;

  activeTag: Tag;

  constructor(
    private readonly postsService: PostsService,
    private readonly router: Router,
    private readonly loading: LoadingService,
  ) {

  }

  ngOnInit() {
    const username = sessionStorage.getItem("auth_data");

    if (!username) {
      this.router.navigateByUrl("/login");
    }
  }

  onSearch(search: string) {

    if (search) {
      this.searchResults$ = this.postsService.searchTagsByName(search);
    } else {
      this.searchResults$ = this.postsService.searchTags(search);
    }

    this.loading.showLoaderUntilCompleted(this.searchResults$).subscribe();
  }

  openTag(tag: Tag) {
    this.activeTag = tag;
  }

  onBackToSearch() {
    this.activeTag = null;
  }

}
