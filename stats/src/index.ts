import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const reader = MatchReader.getCsvFileReader('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United')

reader.load()
summary.buildAndReportSummary(reader.matches)

// Composition vs Inheritance Lec - 125
