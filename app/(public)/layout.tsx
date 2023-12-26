
import { Navbar } from '@/components';
import styles from './layout.module.css'

export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
		<>
		<Navbar />
		<div className={styles['container-layout']}>
			<h1>Hello Root Layout General</h1>
		{children}
		</div>
	</>
  );
}