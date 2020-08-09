import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
// posts=[
//  { title:"First Post", content:"This is first post's content"},
//  { title:"Second Post", content:"This is second post's content"},
//   { title:"Third Post", content:"This is third post's content"}

// ]
posts: Post[] = [];
private postsSub: Subscription;

constructor(public postsService: PostsService) {}

ngOnInit() {
  this.posts = this.postsService.getPosts();
  this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
}

ngOnDestroy() {
  this.postsSub.unsubscribe();
}



}
