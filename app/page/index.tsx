import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'
import { navItems } from '@/components/navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello Home&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
	  <Link href={navItems[0].path} >{navItems[0].text}</Link>
    </main>
  )
}
