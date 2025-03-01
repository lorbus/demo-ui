import moment from 'moment';
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Post} from "../model/post";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {LoadingService} from '../loading/loading.service';
import {PostsStore} from '../service/posts.store';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.css',
  providers: [
    LoadingService,
  ],
  standalone: false,
})
export class PostDialogComponent {

  form: FormGroup;

  post: Post;

  originalPost: Post;

  isDisabled: boolean = true;

  originalCreatedAtDate: string;

  originalUpdatedAtDate: string;

  updatedDate;

  constructor(
    @Inject(MAT_DIALOG_DATA) post: Post,
    formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<PostDialogComponent>,
    private readonly postsStore: PostsStore,
    private readonly toast: ToastrService,
  ) {
    this.originalPost = post;

    this.post = post;

    // this.updatedDate = post?.updatedAt ? post.updatedAt : new Date();

    this.form = formBuilder.group({
      title: [post.title, Validators.required],
      content: [post.content, Validators.required],
      createdAt: [moment(post.createdAt), Validators.required],
      updatedAt: [moment(post?.updatedAt), Validators.required],
    });

    this.originalCreatedAtDate = moment(post.createdAt).format('YYYY-MM-DD');
    this.originalUpdatedAtDate = moment(post?.updatedAt).format('YYYY-MM-DD');
  }

  save() {
    const changes = this.form.value;

    this.postsStore.savePost(this.post.id, changes).subscribe();

    this.dialogRef.close(changes);

    const message = "Post saved successfully";
    this.toast.success(message);
  }

  close() {
    this.dialogRef.close();
  }

  enableOrDisableSaveButton() {
    this.isDisabled = (
      this.originalPost.title === this.form.value.title
      && this.originalPost.content === this.form.value.content
      && this.originalCreatedAtDate === moment(this.form.value.createdAt).format('YYYY-MM-DD')
      && this.originalUpdatedAtDate === moment(this.form.value.updatedAt).format('YYYY-MM-DD')
    );
  }

}
