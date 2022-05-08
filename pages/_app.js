import '../styles/globals.css'
import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import { LocaleProvider } from '@/lib/locale'
import Scripts from '@/components/Scripts'


function MyApp({ Component, pageProps }) {
  return (<>
    <Scripts />
    <LocaleProvider>
      <>
        <Component {...pageProps} />
      </>
    </LocaleProvider>
  </>
  )

}

export default MyApp
