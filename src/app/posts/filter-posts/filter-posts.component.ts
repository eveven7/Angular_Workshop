import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

const fb = new FormBuilder().nonNullable;
@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent {
  @Output() filterChange = new EventEmitter<string>();

  titleForm = fb.group
    ({
      title: ['']
    },
 { updateOn: 'blur' })

  constructor(
    private postsService: PostsService) { }




  onTitleFormSubmit() {
    if (this.titleForm.valid) {

      this.filterChange.emit(this.titleForm.value.title);
    }

  }
}