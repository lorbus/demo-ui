import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../model/tag';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
})
export class TagComponent implements OnInit {

  @Input()
  tag: Tag;

  constructor() {

  }

  ngOnInit() {
    // method 'ngOnInit' is empty
  }

}
