import { ArrowDownToLine, FileText } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data/portfolio'

export default function Resume() {
  return <section className="section resume-section" id="resume"><div className="container resume-inner"><SectionHeading eyebrow="07 / Resume" title="A closer look at my experience." copy={portfolio.summary} /><a className="resume-download" href={portfolio.resume} download><span><FileText size={20} /> {portfolio.name}</span><ArrowDownToLine size={19} /></a></div></section>
}