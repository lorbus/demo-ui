import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../model/post';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PostDialogComponent} from '../post-dialog/post-dialog.component';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'posts-card-list',
  templateUrl: './posts-card-list.component.html',
  styleUrl: './posts-card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PostsCardListComponent implements OnInit {

  @Input()
  posts: Post[] = [];

  @Output()
  private readonly postsChanged = new EventEmitter();

  constructor(private readonly dialog: MatDialog) {

  }

  ngOnInit() {
    // method 'ngOnInit' is empty
  }

  editPost(post: Post) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = post;

    const dialogRef = this.dialog.open(PostDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(val => !!val),
        tap(() => this.postsChanged.emit())
      )
      .subscribe();
  }

}
