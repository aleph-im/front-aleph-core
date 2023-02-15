import { css, FlattenSimpleInterpolation } from "styled-components"
import { ThemeGlow } from "../themes/styles"

export type GlowOpts = { width?: number, height?: number, offset?: boolean }


function calculateShadowPos(bs: Record<string, number[]>, opts?: GlowOpts): Record<string, string> {
  const bss: Record<string, string> = {}

  if (opts?.width !== undefined || opts?.height !== undefined) {
    const w = opts.width || 0
    const h = opts.height || 0
    const r = Math.max(w, h)
    const s = Math.min(w, h)

    if (opts?.offset === true) {
      for (const [k, v] of Object.entries(bs)) {
        bss[k] = `calc(${v[0]}em + ${w * v[0]}px) calc(${v[1]}em + ${h * v[1]}px) calc(${v[2]}em + ${r * v[2]}px) calc(${v[3]}em + ${s * v[3]}px)`
      }
    } else {
      for (const [k, v] of Object.entries(bs)) {
        bss[k] = `${v[0] * w}px ${v[1] * h}px ${v[2] * r}px ${v[3] * s}px`
      }
    }
  } else {
    for (const [k, v] of Object.entries(bs)) {
      bss[k] = `${v[0]}em ${v[1]}em ${v[2]}em ${v[3]}em`
    }
  }

  return bss

}

export function getGlowMaxCss(color: keyof ThemeGlow, opts?: GlowOpts): FlattenSimpleInterpolation | undefined {
  // inset 0px -82px 68px -64px
  // inset 0px 7px 11px -4px
  // inset 0px 39px 56px -36px
  // inset 0px 1px 40px 0px
  // inset 0px 4px 18px 0px
  // inset 0px 98px 100px -48px
  // 0px -18px 60px 26px
  // 34px 60px 122px 44px

  const bs = {
    s1: [0, -0.4271, 0.3542, -0.3333],
    s2: [0, 0.0365, 0.0573, -0.0208],
    s3: [0, 0.2031, 0.2917, -0.1875],
    s4: [0, 0.0052, 0.2083, 0],
    s5: [0, 0.0208, 0.0938, 0],
    s6: [0, 0.5104, 0.5208, -0.25],
    sc1: [0, -0.0938, 0.3125, 0.1354],
    sc2: [0.1771, 0.3125, 0.6354, 0.2292],
    sc3: [0.2552, 0.3385, 0.6458, -0.1146],
  }

  const bss = calculateShadowPos(bs, opts)

  switch (color) {
    case 'main0':
      return css`
        /* GLOW-MAX/blue */
        box-shadow: 
          inset ${bss.s1} #4462904D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFFFFF80,
          inset ${bss.s4} #DEEFFF33,
          inset ${bss.s5} #92D2D24D,
          inset ${bss.s6} #00D1FF2E,
          ${bss.sc1} #0054FF4F,
          ${bss.sc2} #0066FF99;
      `
    case 'main1':
      return css`
        /* GLOW-MAX/green */
        box-shadow: 
          inset ${bss.s1} #4462904D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFFFFF80,
          inset ${bss.s4} #DEFFF533,
          inset ${bss.s5} #92D2AF4D,
          inset ${bss.s6} #00FFBD2E,
          ${bss.sc1} #00FFBD61,
          ${bss.sc2} #00FFBD47;
      `
    case 'main2':
      return css`
        /* GLOW-MAX/orange */
        box-shadow: 
          inset ${bss.s1} #FFCC494D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFFFFF80,
          inset ${bss.s4} #FFEEDE33,
          inset ${bss.s5} #D2C4924D,
          inset ${bss.s6} #FFF5002E,
          ${bss.sc1} #FFC70061,
          ${bss.sc2} #FF990047;
      `
    case 'extra0':
      return css`
        /* GLOW-MAX/purple */
        box-shadow:
          inset ${bss.s1} #6044904D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFFFFF80,
          inset ${bss.s4} #E3DEFF33,
          inset ${bss.s5} #9A92D24D,
          inset ${bss.s6} #CAAFFC4D,
          ${bss.sc1} #9C41FFB2,
          ${bss.sc3} #9C41FF4D;
      `
    case 'extra1':
      return css`
        /* GLOW-MAX/red */
        box-shadow:
          inset ${bss.s1} #9044444D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFFFFF80,
          inset ${bss.s4} #FFF2DE33,
          inset ${bss.s5} #D2B5924D,
          inset ${bss.s6} #FCC6AF4D,
          ${bss.sc1} #F66262B2,
          ${bss.sc3} #FF41B34D;
      `
  }
}

export function getGlowMinCss(color: keyof ThemeGlow, opts?: GlowOpts): FlattenSimpleInterpolation | undefined {
  // inset 0px -82px 68px -64px
  // inset 0px 7px 11px -4px
  // inset 0px 1px 40px 0px
  // inset 0px 4px 18px 0px
  // inset 0px 98px 100px -48px
  // 0px -18px 60px 26px
  // 34px 60px 122px 44px

  const bs = {
    s1: [0, -0.4271, 0.3542, -0.3333],
    s2: [0, 0.0365, 0.0573, -0.0208],
    s3: [0, 0.0052, 0.2083, 0],
    s4: [0, 0.0208, 0.0938, 0],
    s5: [0, 0.5104, 0.5208, -0.25],
    sc1: [0, -0.0938, 0.3125, 0.1354],
    sc2: [0.1771, 0.3125, 0.6354, 0.2292],
    sc3: [0, 0.1979, 0.3646, -0.25],
  }

  const bss = calculateShadowPos(bs, opts)

  switch (color) {
    case 'main0':
      return css`
        /* GLOW-MIN/blue */
        box-shadow:
          inset ${bss.s1} #4462904D,
          inset ${bss.s2} #FFFFFFB2,
          inset ${bss.s3} #DEEFFF33,
          inset ${bss.s4} #92D2D24D,
          ${bss.sc1} #0054FF1C,
          ${bss.sc2} #0066FF4D;
      `
    case 'main1':
      return css`
        /* GLOW-MIN/green */
        box-shadow:
          inset ${bss.s1} #4462904D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s4} #92D2AF4D,
          inset ${bss.s5} #00FFBD1A,
          ${bss.sc1} #00FFBD2E,
          ${bss.sc2} #00FFBD2E;
      `
    case 'main2':
      return css`
        /* GLOW-MIN/orange */
        box-shadow:
          inset ${bss.s1} #FFCC4933,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFEEDE33,
          inset ${bss.s4} #D2C4924D,
          inset ${bss.sc3} #FFF50014,
          ${bss.sc1} #FFC7002E,
          ${bss.sc2} #FF99002E;
      `
  }
}

export function getGlowHoverCss(color: keyof ThemeGlow, opts?: GlowOpts): FlattenSimpleInterpolation | undefined {
  // inset 0px -82px 68px -64px
  // inset 0px 7px 11px -4px
  // inset 0px 1px 40px 0px
  // inset 0px 4px 18px 0px
  // inset 0px 98px 100px -48px
  // 0px -18px 60px 26px
  // 34px 60px 122px 44px

  const bs = {
    s1: [0, -0.4271, 0.3542, -0.3333],
    s2: [0, 0.0365, 0.0573, -0.0208],
    s3: [0, 0.0052, 0.2083, 0],
    s4: [0, 0.0208, 0.0938, 0],
    s5: [0, 0.5104, 0.5208, -0.25],
    sc1: [0, -0.0938, 0.3125, 0.1354],
    sc2: [0.1771, 0.3125, 0.6354, 0.2292],
    sc3: [0, 0.1979, 0.3646, -0.25],
  }

  const bss = calculateShadowPos(bs, opts)

  switch (color) {
    case 'main0':
      return css`
        /* GLOW-hover/blue */
        box-shadow:
          inset ${bss.s1} #4462904D,
          inset ${bss.s2} #FFFFFFB2,
          inset ${bss.s3} #DEEFFF33,
          inset ${bss.s4} #92D2D24D,
          ${bss.sc1} #0054FF36,
          ${bss.sc2} #0066FF66;
      `
    case 'main1':
      return css`
        /* GLOW-hover/green */
        box-shadow:
          inset ${bss.s1} #4462904D,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s4} #92D2AF4D,
          inset ${bss.s5} #00FFBD1A,
          ${bss.sc1} #00FFBD47,
          ${bss.sc2} #00FFBD47;
      `
    case 'main2':
      return css`
        /* GLOW-hover/orange */
        box-shadow:
          inset ${bss.s1} #FFCC4933,
          inset ${bss.s2} #FFFFFF,
          inset ${bss.s3} #FFEEDE33,
          inset ${bss.s4} #D2C4924D,
          inset ${bss.sc3} #FFF50014,
          ${bss.sc1} #FFC70047,
          ${bss.sc2} #FF990047;
      `
  }
}