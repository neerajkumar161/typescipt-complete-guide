import { CsvFileReader } from './CsvFileReader'
import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'
import { dateStringToDate } from './utils'

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  static getCsvFileReader(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename))
  }
  matches: MatchData[] = []
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [dateStringToDate(row[0]), row[1], row[2], +row[3], +row[4], row[5] as MatchResult, row[6]]
    })
  }
}
