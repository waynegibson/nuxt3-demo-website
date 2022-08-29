import type { Plugin } from 'windicss/types/interfaces'
import formsPlugin from 'windicss/plugin/forms'
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import typographyPlugin from 'windicss/plugin/typography'

export const plugins: Plugin[] = [
  formsPlugin,
  aspectRatioPlugin,
  typographyPlugin(),
]
