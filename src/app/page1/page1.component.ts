import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  template: `
    <p>
      page1 works!
    </p>
  `,
  styles: [ ]
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
