import { OutputTarget } from './../Summary'

export class ConsoleReport implements OutputTarget {
  //   constructor(public report: string) {}

  print(report: string): void {
    console.log(report)
  }
}
