import { BadInput } from "./../common/bad-input";
import { AppError } from "./../common/app-error";
import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { NotFoundError } from "../common/not-found-error";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.less"]
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(posts => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.unshift(post);

    input.value = "";

    this.service.create(post).subscribe(
      newPost => {
        post["id"] = newPost["id"];
        console.log(post);
      },
      (error: AppError) => {
        this.posts.shift();

        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe(updatedPost => {
      const index = this.posts.indexOf(post);
      this.posts[index].title = updatedPost["title"];
    });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    const deletedPost = this.posts.splice(index, 1)[0];
    console.log(deletedPost);

    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, deletedPost);

      if (error instanceof NotFoundError) {
        alert("This post has already been deleted.");
      } else {
        throw error;
      }
    });
  }
}
