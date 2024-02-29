import type { MDXComponents } from 'mdx/types'

import Arabic from './components/Arabic'
import MDXWrapper from './components/MDXWrapper'
import { Alert } from './components/ui/alert'

export function useMDXComponents(components: MDXComponents) {
  return { ...components, Alert: Alert, MDXWrapper: MDXWrapper, Arabic: Arabic }
}
