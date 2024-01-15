import type { MDXComponents } from 'mdx/types'

import MDXWrapper from './components/MDXWrapper'

export function useMDXComponents(components: MDXComponents) {
  return { ...components, MDXWrapper: MDXWrapper }
}
