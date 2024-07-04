
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
			<div className={styles.contianer}>
			{children}
			</div>
		</>
  );
}