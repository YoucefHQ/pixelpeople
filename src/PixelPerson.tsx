import React, { useMemo } from 'react';
import { GRID, GRID_WIDTH, GRID_HEIGHT, type Zone } from './grid';
import { resolveColors, generateSeed } from './utils';

export interface PixelPersonProps {
  /** Rendered height in pixels. Width scales proportionally (12:16 ratio). */
  size?: number;
  /** CSS color for hair. Random if omitted. */
  hair?: string;
  /** CSS color for shirt. Random if omitted. */
  shirt?: string;
  /** CSS color for pants. Random if omitted. */
  pants?: string;
  /** CSS color for shoes. Random if omitted. */
  shoes?: string;
  /** Skin tone preset (1-5) or CSS color string. Random if omitted. */
  tone?: string | number;
  /** @internal Seed for deterministic randomization */
  _seed?: number;
}

export function PixelPerson({
  size = 32,
  hair,
  shirt,
  pants,
  shoes,
  tone,
  _seed,
}: PixelPersonProps) {
  const seed = useMemo(() => _seed ?? generateSeed(), [_seed]);
  const colors = useMemo(
    () => resolveColors({ hair, shirt, pants, shoes, tone }, seed),
    [hair, shirt, pants, shoes, tone, seed],
  );

  const width = (size / GRID_HEIGHT) * GRID_WIDTH;

  const getColor = (zone: Zone): string | null => {
    switch (zone) {
      case 'hair': return colors.hair;
      case 'skin': return colors.skin;
      case 'eye': return '#000000';
      case 'shirt': return colors.shirt;
      case 'pants': return colors.pants;
      case 'shoes': return colors.shoes;
      case 'outline': return '#000000';
      case 'empty': return null;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={size}
      viewBox={`0 0 ${GRID_WIDTH} ${GRID_HEIGHT}`}
      style={{ display: 'inline-block', verticalAlign: 'bottom', imageRendering: 'pixelated' }}
      shapeRendering="crispEdges"
    >
      {GRID.flatMap((row, rowIdx) =>
        row.map((zone, colIdx) => {
          const color = getColor(zone);
          if (color === null) return null;
          return (
            <rect
              key={`${rowIdx}-${colIdx}`}
              x={colIdx}
              y={rowIdx}
              width={1}
              height={1}
              fill={color}
            />
          );
        }),
      )}
    </svg>
  );
}
