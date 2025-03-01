import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../model/tag';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  standalone: false,
})
export class TagComponent implements OnInit {

  @Input()
  tag: Tag;

  constructor() {
    // constructor is empty
  }

  ngOnInit() {
    // method 'ngOnInit' is empty
  }

}
