import fs from 'fs'

export class CsvFileReader {
  data: string[][] = []
  constructor(public filename: string) {}

  read = () => {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
  }
}

// 10/08/2018,Man United,Leicester,2,1,H,A Marriner
