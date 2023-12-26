import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import {ActiveLink} from '@/components'
import styles from './navbar.module.css';

export const navItems = [{path: '/about', text: 'About'},{path: '/contact', text: 'Contact'},{path: '/', text: 'Home'}]

const Navbar = () => {
return (
	<nav className={styles.container}>
		<Link href="/" className={styles.home} >
			<HomeIcon className={styles.icon} />
			<span>Home</span>
		</Link>
		<div className={styles.navigation}></div>
		{navItems.map(item=>(
			<ActiveLink key={item.path} {...item} />
		))}
	</nav>
	)
}

export default Navbar;
