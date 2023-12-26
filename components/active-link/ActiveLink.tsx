'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './active-link.module.css';

interface Props {
	path: string;
	text: string;
}

const ActiveLink = ({path, text}: Props) => {
const routeName =	usePathname();
return (<Link className={`${style.link} ${routeName === path && style['active-link']}` } key={path} style={{marginRight: '2rem'}} href={path}>{text}</Link>)
};


export default ActiveLink