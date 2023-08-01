import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'firstTest';

  onClickMe(a: string) {
    this.title = a;
  }

  desc: string = 'Empty'

  onKey(event: KeyboardEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement
    this.desc = target.value ? target.value : "Empty" ;
  }
}
