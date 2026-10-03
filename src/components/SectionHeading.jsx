import PropTypes from 'prop-types'
export default function SectionHeading({ eyebrow, title, copy }) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div> }
SectionHeading.propTypes = { eyebrow: PropTypes.string.isRequired, title: PropTypes.node.isRequired, copy: PropTypes.string }