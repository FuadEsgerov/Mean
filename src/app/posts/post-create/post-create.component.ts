import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Post} from '../post.model';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {PostsService} from '../posts.service'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

enteredTitle="";
enteredContent="";

onAddPost(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.postsService.addPost(form.value.title, form.value.content);
  form.resetForm();
}
  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

}
