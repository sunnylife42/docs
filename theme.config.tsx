import React from 'react'
import { useRouter } from 'next/router'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'

const title = '闪闪人生'
const description = '拥抱爱与成就，就用闪闪人生'
const url = 'https://sunnylife42.com/docs'

const config: DocsThemeConfig = {
  logo: (
    <img src="https://cdn.sunnyhuang.net/share/logo-full.png" alt="logo" style={{ height: 32 }} />
  ),
  project: {
    link: 'https://github.com/sunnylife42/docs',
  },
  docsRepositoryBase: 'https://github.com/sunnylife42/docs/blob/master',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: `%s – ${title}`
      }
    }
  },
  head: () => {
    const { asPath } = useRouter()
    const config = useConfig()
    return (
      <>
        <meta name="og:url" content={`${url}${asPath}`} />
        <meta name="og:title" content={config.title ? `${config.title} – ${title}` : title} />
        <meta name="og:image" content="https://cdn.sunnyhuang.net/share/logo-square.png" />
      </>
    )
  },
  main: ({ children }) => (
    <main id="main">
      {children}
    </main>
  ),
  footer: {
    text: (
      <p className="nx-w-full nx-text-center">
        © {new Date().getFullYear()} {title}
      </p>
    )
  }
}

export default config
