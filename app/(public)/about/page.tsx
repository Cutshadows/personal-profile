import type { Metadata} from 'next';

export const metadata: Metadata = {
	title: 'SEO TITLE'+ new Date().toString(),
	description: 'everything you can put in',
	keywords: ['looking', 'peer']
} 

const AboutPage = () => {
  return (
	<div>page</div>
  )
}

export default AboutPage;
