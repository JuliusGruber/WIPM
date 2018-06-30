import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() textChanger: EventEmitter<string> = new EventEmitter<string>();

  terms$ = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.terms$
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(term => this.textChanger.emit(term));
  }
}
