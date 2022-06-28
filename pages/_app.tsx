import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import MetaContainer from "@components/MetaContainer";
import { Metrics } from '@layer0/rum'

new Metrics({
  token: '3b12d2b0-4c14-4da3-b225-8cb081c71968'
}).collect()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <ThemeProvider attribute="class" enableSystem={true}>
                <MetaContainer>
                    <Component {...pageProps} />
                </MetaContainer>
            </ThemeProvider>
        </div>
    )
}

export default MyApp
