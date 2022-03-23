import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MatchData } from './MatchData'
import { HTMLReport } from './reportTargets/HTMLReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HTMLReport())
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndReportSummary(matches: MatchData[]): void {
    const report = this.analyzer.run(matches)
    this.outputTarget.print(report)
  }
}
