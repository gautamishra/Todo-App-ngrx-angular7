import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  @Output() setText: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addGoal = (form: NgForm): void => {
    if (!!form && form.valid) {
        this.setText.emit(form.controls.text.value);
        form.resetForm();
    }
  }
}
