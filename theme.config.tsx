import React from 'react'
import { useRouter } from 'next/router'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'

const title = '闪闪人生'
const description = '拥抱爱与成就，就用闪闪人生'
const url = 'https://sunnylife.love/docs'

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
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`${url}${asPath}`} />
      <meta property="og:title" content={frontMatter.title || title} />
      <meta property="og:description" content={frontMatter.description || description} />
      <meta property="og:image" content="https://cdn.sunnyhuang.net/share/logo-square.png" />
    </>
  },
  main: ({ children }) => (
    <main id="main">
      {children}
    </main>
  ),
  footer: {
    text: (
      <p className="nx-w-full nx-text-center">
        © {new Date().getFullYear()} {title}.
      </p>
    )
  }
}

export default config
