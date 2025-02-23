import {Component, OnInit} from '@angular/core';
import {LoadingService} from './loading.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
  standalone: false,
})
export class LoadingComponent implements OnInit {

  constructor(public loadingService: LoadingService) {
    // constructor is empty
  }

  ngOnInit() {
    // method 'ngOnInit' is empty
  }

}
