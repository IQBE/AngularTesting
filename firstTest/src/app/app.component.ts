import { Component, NgModule } from '@angular/core';
import { Logger } from './logger.service'; // Import services


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger] // Provide services to use them
})
export class AppComponent {
  constructor(
    private logger: Logger // Services in constructor to initialise
  ) {}

  title: string = 'firstTest';

  onClickMe(a: string) {
    this.title = a ? a : "No title";
  }

  desc: string = 'Empty'

  onKey(event: KeyboardEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement
    this.desc = target.value ? target.value : "Empty" ;
    this.logger.log(this.desc) // Call services from constructor
  }

  val: number = 0

  inc() {this.calc(+1)}
  dec() {this.calc(-1)}
  calc(delta: number) {
    this.val += delta
  }

  arr: Array<string> = ["This", "is", "a", "test"];
}