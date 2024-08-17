import {motion} from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = ({children, idName}: {children: React.ReactNode, idName: string}) => {
return (
	<motion.section
		variants={staggerContainer()}
		initial="hidden"
		whileInView="show"
		viewport={{once: true, amount: 0.25}}
	>
	  <span className='hash-span' id={idName}>
          &nbsp;
        </span>
	{children}
	</motion.section>
  );
};

export default SectionWrapper