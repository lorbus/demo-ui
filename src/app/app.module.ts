import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PostComponent} from './post/post.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {PostDialogComponent} from './post-dialog/post-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {LoginComponent} from './login/login.component';
import {TagComponent} from './tag/tag.component';
import {SafeUrlPipe} from './common/safe-url.pipe';
import {SearchTagsComponent} from './search-tags/search-tags.component';
import {LoadingComponent} from './loading/loading.component';
import {PostsCardListComponent} from './posts-card-list/posts-card-list.component';
import {LoadingService} from './loading/loading.service';
import {NgOptimizedImage} from "@angular/common";
import {ToastrModule} from 'ngx-toastr';
import {MatTooltip} from "@angular/material/tooltip";

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatTabsModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      AppRoutingModule,
      MatSelectModule,
      MatDatepickerModule,
      MatMomentDateModule,
      ReactiveFormsModule,
      NgOptimizedImage,
      ToastrModule.forRoot({
            preventDuplicates: true,
            autoDismiss: true,
            newestOnTop: true,
            closeButton: true,
            tapToDismiss: false,
            timeOut: 10000,
            positionClass: 'toast-top-right',
        }),
      MatTooltip,
    ],
  providers: [
    LoadingService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostDialogComponent,
    LoginComponent,
    TagComponent,
    SafeUrlPipe,
    SearchTagsComponent,
    LoadingComponent,
    PostsCardListComponent,
  ],
  bootstrap: [
    [AppComponent],
  ],
})

export class AppModule {

}
