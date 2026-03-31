# pixelpeople

Create cute pixel art people in React.

## Install

```
npm install pixelpeople
```

## Quick Start

```jsx
import { PixelPerson, PixelCrowd } from 'pixelpeople';

// One random person
<PixelPerson />

// A crowd of 12 random people
<PixelCrowd count={12} />

// A soccer team — same red shirt, everything else random
<PixelCrowd count={11} shirt="#FF0000" pants="white" size={48} />
```

## Components

### `<PixelPerson />`

Renders a single pixel art person as an inline SVG.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 32 | Rendered height in px. Width scales proportionally. |
| hair | string | Random | Any CSS color. |
| shirt | string | Random | Any CSS color. |
| pants | string | Random | Any CSS color. |
| shoes | string | Random | Any CSS color. |
| tone | 1–5 or string | Random | Emoji-style preset or any CSS color. |

#### Skin tone presets

| Value | Hex |
|-------|-----|
| 1 | #FFDBB4 |
| 2 | #EDB98A |
| 3 | #D08B5B |
| 4 | #AE5D29 |
| 5 | #614335 |

### `<PixelCrowd />`

Renders a row of pixel people side by side.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| count | number | Required | Number of people to render. |
| size | number | 32 | Size of each person. |
| gap | number | 4 | Spacing between people in px. |
| hair | string | Random/person | Set to apply to all. |
| shirt | string | Random/person | Set to apply to all. |
| pants | string | Random/person | Set to apply to all. |
| shoes | string | Random/person | Set to apply to all. |
| tone | 1–5 or string | Random/person | Set to apply to all. |

When a color is omitted, each person gets an independently randomized color.

## Why SVG?

- Scales to any size without blur
- Works with SSR and static rendering
- Copy-paste into Figma, emails, anywhere
- No canvas, no WebGL, no nonsense

## License

MIT
