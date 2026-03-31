export type Zone = 'hair' | 'skin' | 'eye' | 'shirt' | 'pants' | 'shoes' | 'outline' | 'empty';

// 14 columns × 18 rows pixel character grid
const _ = 'empty' as const;
const o = 'outline' as const;
const h = 'hair' as const;
const s = 'skin' as const;
const e = 'eye' as const;
const t = 'shirt' as const;
const p = 'pants' as const;
const w = 'shoes' as const;

export const GRID_WIDTH = 14;
export const GRID_HEIGHT = 18;

export const GRID: Zone[][] = [
  // Row 0: top of head
  [_, _, _, _, _, o, o, o, o, _, _, _, _, _],
  // Row 1: hair top
  [_, _, _, o, o, h, h, h, h, o, o, _, _, _],
  // Row 2: hair wide
  [_, _, o, h, h, h, h, h, h, h, h, o, _, _],
  // Row 3: hair wide
  [_, _, o, h, h, h, h, h, h, h, h, o, _, _],
  // Row 4: forehead + hair (asymmetric)
  [_, o, h, s, h, h, h, h, h, h, h, h, o, _],
  // Row 5: face upper (skin left, hair right)
  [_, o, s, s, s, s, h, h, h, h, h, s, o, _],
  // Row 6: full face
  [_, o, s, s, s, s, s, s, s, s, s, s, o, _],
  // Row 7: face features (eyes/nose)
  [_, _, o, s, s, o, s, s, o, s, s, o, _, _],
  // Row 8: lower face / mouth
  [_, _, _, o, s, o, s, s, o, s, o, _, _, _],
  // Row 9: neck + collar
  [_, _, o, t, o, s, s, s, s, o, t, o, _, _],
  // Row 10: upper body
  [_, o, s, t, t, o, o, o, o, t, t, s, o, _],
  // Row 11: shirt + arms
  [o, s, s, o, t, t, t, t, t, t, o, s, s, o],
  // Row 12: shirt + arms
  [o, s, s, o, t, t, t, t, t, t, o, s, s, o],
  // Row 13: belt / waist
  [_, o, o, p, o, o, o, o, o, o, p, o, o, _],
  // Row 14: pants full
  [_, _, o, p, p, p, p, p, p, p, p, o, _, _],
  // Row 15: pants legs
  [_, _, o, p, p, p, o, o, p, p, p, o, _, _],
  // Row 16: shoes
  [_, _, o, w, w, w, o, o, w, w, w, o, _, _],
  // Row 17: shoe soles
  [_, _, _, o, o, o, _, _, o, o, o, _, _, _],
];
