import { Component } from '@angular/core';
import { Logger } from '../logger.service'; // import service

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [Logger] // Provide services to use them
})
export class TestComponent {
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
