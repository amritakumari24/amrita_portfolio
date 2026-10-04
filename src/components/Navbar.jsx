import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function Navbar() {
	const [open, setOpen] = useState(false)
	const [light, setLight] = useState(() => localStorage.getItem('portfolio-theme') === 'light')
	const links = [['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']]

	useEffect(() => {
		document.documentElement.classList.toggle('light-theme', light)
		localStorage.setItem('portfolio-theme', light ? 'light' : 'dark')
	}, [light])

	return <header className="nav-wrap"><nav className="nav container"><a className="brand" href="#top"><span>AK</span> AMRITA <b>KUMARI</b></a><div className="nav-links">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div className="nav-tools"><button className="theme-toggle" onClick={() => setLight(!light)} aria-label={`Switch to ${light ? 'dark' : 'light'} mode`}>{light ? <Moon size={15} /> : <Sun size={15} />}</button><a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a></div><button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mobile-menu">{links.map(([label, id]) => <a onClick={() => setOpen(false)} key={id} href={`#${id}`}>{label}</a>)}<button className="mobile-theme" onClick={() => setLight(!light)}>{light ? <Moon size={15} /> : <Sun size={15} />} {light ? 'Dark mode' : 'Light mode'}</button></motion.div>}</AnimatePresence></header>
}