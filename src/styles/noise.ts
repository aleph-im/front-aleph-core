import { css } from 'styled-components'

export const gradientFilled: Record<string, string> = {
  main0: 'linear-gradient(#81b8d8, #4b6599)',
  main1: 'linear-gradient(#a2dfce, #607a84)',
  main2: 'linear-gradient(#c0b6a4, #675550)',
}

type UniformNoiseEffect = { dotsColor: string; backgroundColor: string }
export const colorFilled: Record<string, UniformNoiseEffect> = {
  base: { dotsColor: '#dfdfe1', backgroundColor: 'transparent' },
  dark: { dotsColor: '#1e1d2c', backgroundColor: '#100f1f' },
  light: { dotsColor: '#2a293e', backgroundColor: '#19182f' },
}

export function getNoiseSvgMaskCss() {
  return css`
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBoZWlnaHQ9ImF1dG8iPgogIDxmaWx0ZXIgaWQ9ImZub2lzZSIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IgogICAgcHJpbWl0aXZlVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIgogICAgICByZXN1bHQ9InR1cmJ1bGVuY2UiPiA8L2ZlVHVyYnVsZW5jZT4KICAgIDxmZVNwZWN1bGFyTGlnaHRpbmcgc3VyZmFjZVNjYWxlPSI4IiBzcGVjdWxhckNvbnN0YW50PSIxLjIiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZ0NvbG9yPSIjZmZmZmZmIiB4PSIwJSIKICAgICAgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJ0dXJidWxlbmNlIiByZXN1bHQ9InNwZWN1bGFyTGlnaHRpbmciPgogICAgICA8ZmVEaXN0YW50TGlnaHQgYXppbXV0aD0iMyIgZWxldmF0aW9uPSIxMzAiPjwvZmVEaXN0YW50TGlnaHQ+CiAgICA8L2ZlU3BlY3VsYXJMaWdodGluZz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMDAwMDAwIj48L3JlY3Q+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiIGZpbHRlcj0idXJsKCNmbm9pc2UpIj4gPC9yZWN0Pgo8L3N2Zz4=");
  `
}

export function getPlainNoiseEffectCss(color: string, skipMask = true) {
  const svgCss = skipMask ? '' : getNoiseSvgMaskCss()

  return css`
    position: relative;
    background-color: ${colorFilled[color].backgroundColor};
    z-index: 0;

    &::after {
      content: '';
      background-color: ${colorFilled[color].dotsColor};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      z-index: -1;
      ${svgCss};
    }
  `
}

export function getGradientNoiseEffectCss(color: string, skipMask = true) {
  const svgCss = skipMask ? '' : getNoiseSvgMaskCss()

  return css`
    background-image: ${gradientFilled[color]};
    ${svgCss};
  `
}
