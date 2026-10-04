import { ArrowUpRight, Mail, Moon, Sun } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'

function ScreenLink({ href, label, children }) {
	if (!href) return null
	return <a className="screen-social" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
}

ScreenLink.propTypes = { href: PropTypes.string, label: PropTypes.string.isRequired, children: PropTypes.node.isRequired }

export default function Hero() {
	const laptopRef = useRef(null)
	const reduceMotion = useReducedMotion()
	const [light, setLight] = useState(() => localStorage.getItem('portfolio-theme') === 'light')
	const { scrollYProgress } = useScroll({ target: laptopRef, offset: ['start end', 'end start'] })
	const rotateX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [5, -3])
	const rotateZ = useTransform(scrollYProgress, [0, 1], reduceMotion ? [-2, -2] : [-3, 2])
	const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0.94, 1])
	const featuredSkills = Object.values(portfolio.skills).flat().slice(0, 8)
	const navigation = [['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Education', 'education'], ['Achievements', 'achievements'], ['Resume', 'resume'], ['Contact', 'contact']]

	useEffect(() => {
		document.documentElement.classList.toggle('light-theme', light)
		localStorage.setItem('portfolio-theme', light ? 'light' : 'dark')
	}, [light])

	return <section className="hero" id="top">
		<div className="hero-backdrop" aria-hidden="true"><span /><span /></div>
		<motion.div ref={laptopRef} className="laptop-stage container" style={{ rotateX, rotateZ, scale }} initial={{ opacity: 0, y: 70, rotateX: 14 }} animate={{ opacity: 1, y: 0, rotateX: 5 }} transition={{ duration: 1, ease: [.22, 1, .36, 1] }}>
			<div className="laptop-screen-shell">
				<div className="laptop-camera" />
				<div className="laptop-screen">
					<motion.div className="screen-interface" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }}>
						<div className="screen-nav"><a className="screen-brand" href="#top"><b>AK</b> / {portfolio.name.toUpperCase()}</a><nav className="screen-nav-links" aria-label="Portfolio sections">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><button className="screen-theme" onClick={() => setLight(!light)} aria-label={`Switch to ${light ? 'dark' : 'light'} mode`}>{light ? <Moon size={12} /> : <Sun size={12} />}</button></div>
						<div className="screen-main">
							<div className="screen-copy"><p className="screen-eyebrow">{portfolio.title} <span>／</span> {portfolio.location}</p><h1>{portfolio.name.split(' ')[0]}<br /><em>{portfolio.name.split(' ').slice(1).join(' ')}</em></h1><p className="screen-summary">{portfolio.summary}</p><div className="screen-actions"><a className="screen-button screen-button-primary" href="#projects">Explore work <ArrowUpRight size={13} /></a><a className="screen-button" href={portfolio.resume} download>Resume <ArrowUpRight size={13} /></a></div></div>
							<div className="screen-aside"><span className="screen-index">01 <i /> 04</span><div className="screen-profile"><img src="/assets/profile.jpg" alt={`${portfolio.name} profile`} onError={(event) => { event.currentTarget.style.display = 'none' }} /><div className="screen-profile-placeholder"><b>AK</b><span>PROFILE PHOTO</span></div></div><span className="screen-caption">SOFTWARE<br /><b>&amp; AI ENGINEER</b></span></div>
						</div>
						<div className="screen-bottom"><div className="screen-skills">{featuredSkills.map(skill => <span key={skill}>{skill}</span>)}</div><div className="screen-socials"><a className="screen-social" href={`mailto:${portfolio.email}`} aria-label="Email"><Mail size={14} /></a><ScreenLink href={portfolio.github} label="GitHub">GitHub</ScreenLink><ScreenLink href={portfolio.linkedin} label="LinkedIn">LinkedIn</ScreenLink></div></div>
					</motion.div>
					<div className="screen-glare" aria-hidden="true" />
				</div>
			</div>
			<div className="laptop-base"><div className="laptop-hinge" /><div className="keyboard"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="trackpad" /></div>
		</motion.div>
	</section>
}