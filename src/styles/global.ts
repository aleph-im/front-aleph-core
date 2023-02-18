import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import { ThemeEffect } from '../themes/styles'
import {
  getBackgroundColorCss,
  getBackgroundGradientCss,
  getThemeDarkEffectCss,
  getThemeGlassEffectCss,
  getThemeGlowEffectCss,
  getTypoCss,
} from './utils'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    return css`
      @import '${theme.font.url}';

      body {
        font-family: ${theme.font.family.body};
        color: ${theme.color.text};
      }

      p {
        color: ${theme.color.text}b3;
      }

      ${sizingClasses(theme)}

      ${colorClasses(theme)}
      ${typoClasses(theme)}
      ${effectClasses(theme)}
    `
  }}
`

function sizingClasses(theme: DefaultTheme) {
  return css`
    .m-0 { margin: 0; }
    .mt-0, .my-0 { margin-top: 0; }
    .mb-0, .my-0 { margin-bottom: 0; }
    .ml-0, .mx-0 { margin-left: 0; }
    .mr-0, .mx-0 { margin-right: 0; }

    .p-0 { padding: 0; }
    .pt-0, .py-0 { padding-top: 0; }
    .pb-0, .py-0 { padding-bottom: 0; }
    .pl-0, .px-0 { padding-left: 0; }
    .pr-0, .px-0 { padding-right: 0; }
  `
}

function colorClasses(theme: DefaultTheme) {
  return css`
    /* COLORS */
    ${Object.keys(theme.color).map(
    (color) => css`
        .bg-${color} {
          ${getBackgroundColorCss(color)}
        }
      `,
  )}

    /* GRADIENTS */
    ${Object.keys(theme.gradient).map(
    (color) => css`
        .gr-${color} {
          ${getBackgroundGradientCss(color)}
        }
      `,
  )}
  `
}

function typoClasses(theme: DefaultTheme) {
  return css`
    /* TYPOS */
    ${Object.entries(theme.typo).map(
    ([k, v]) => css`
        .tp-${k} ${v.tag ? `, ${k}` : ''} {
          ${getTypoCss(k)}
          margin-top: 20px;
          margin-bottom: 20px;
          line-height: 1.16em;
        }
      `,
  )}

    /* FONT-SIZE */
     ${Object.entries(theme.font.size).map(
    ([k, v]) => css`
        .fs-${k} {
          font-size: ${v}rem;
        }
      `,
  )}
  `
}

function effectClasses(theme: DefaultTheme) {
  return css`
    /* GLOW */
    ${Object.keys(theme.effect.glow).flatMap((glowType) =>
    Object.keys(theme.effect.glow[glowType as keyof ThemeEffect['glow']]).map(
      (glowColor) => css`
          .fx-glow-${glowType}-${glowColor} {
            ${getThemeGlowEffectCss(
        glowType as keyof ThemeEffect['glow'],
        glowColor,
      )}
          }
        `,
    ),
  )}

    /* GLASS */
    ${Object.keys(theme.effect.glass).map(
    (glassColor) => css`
        .fx-glass-${glassColor} {
          ${getThemeGlassEffectCss(glassColor)}
        }
      `,
  )}

    /* GLASS */
    ${Object.keys(theme.effect.dark).map(
    (darkColor) => css`
        .fx-dark-${darkColor} {
          ${getThemeDarkEffectCss(darkColor)}
        }
      `,
  )}
  `
}

export default GlobalStyle
