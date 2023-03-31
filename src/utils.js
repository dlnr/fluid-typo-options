export const calculateFluidStyle = (
  minSizePx,
  maxSizePx,
  minScreenWidthPx = 320,
  maxScreenWidthPx = 1920,
) => {
  const defaultBaseSize = 16
  const minSize = minSizePx / defaultBaseSize
  const maxSize = maxSizePx / defaultBaseSize
  const minScreenWidth = minScreenWidthPx / defaultBaseSize
  const maxScreenWidth = maxScreenWidthPx / defaultBaseSize

  return `clamp(
      ${minSize}rem,
      ${minSize}rem + ${maxSize - minSize} * (100vw - ${minScreenWidth}rem) / ${
    maxScreenWidth - minScreenWidth
  },
      ${maxSize}rem
    )`
}
