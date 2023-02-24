import { css } from 'styled-components'
import { ThemeColor } from '../themes/types'

enum isGradientFill { main0, main1, main2 }

export function getNoiseEffectCss(color: keyof ThemeColor, opacity?: number) {
  const SVGMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700' opacity='1'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' seed='15' stitchTiles='stitch' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='8' specularConstant='1.2' specularExponent='20' lighting-color='%23ffffff' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='130'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%2300000000'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ffffff' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`

  return css`
    ${({theme}) => {
      const getGradient = (color: keyof ThemeColor) => {
        const [a, b] = theme.gradient[color].colors

        return `linear-gradient(to bottom, ${a}, ${b})`
      }

      return css`
        position: relative;
        mask-image: ${SVGMask}};
        -webkit-mask-image: ${SVGMask};
        background-blend-mode: overlay;
        ${
          color in isGradientFill
            ? `
            background-image: ${getGradient(
              color,
            )};
            `
            : `
          background-color: ${theme.color[color]};
          `
        }
      `
    }}
  `
}