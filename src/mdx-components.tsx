import type { MDXComponents } from 'mdx/types'

import MDXWrapper from './components/MDXWrapper'
import { Alert } from './components/ui/alert'

export function useMDXComponents(components: MDXComponents) {
  return { ...components, Alert: Alert, MDXWrapper: MDXWrapper }
}
