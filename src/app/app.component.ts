import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

const fb = new FormBuilder();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postForm = fb.group({
    title: [''],
    content: ['']
  });

  onPostFormSubmit() {
    console.log(this.postForm.value)
    this.postForm.reset();
  }

  onPostFormReset() {
    this.postForm.reset();
  }
}
