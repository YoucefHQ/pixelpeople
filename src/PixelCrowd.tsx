import React, { useMemo } from 'react';
import { PixelPerson, type PixelPersonProps } from './PixelPerson';
import { generateSeed } from './utils';

export interface PixelCrowdProps {
  /** Number of people to render. */
  count: number;
  /** Size of each person (passed through to PixelPerson). */
  size?: number;
  /** Pixel gap between each person. */
  gap?: number;
  /** CSS color for hair. If set, all people share this color. */
  hair?: string;
  /** CSS color for shirt. If set, all people share this color. */
  shirt?: string;
  /** CSS color for pants. If set, all people share this color. */
  pants?: string;
  /** CSS color for shoes. If set, all people share this color. */
  shoes?: string;
  /** Skin tone preset (1-5) or CSS color string. If set, all people share this tone. */
  tone?: string | number;
}

export function PixelCrowd({
  count,
  size = 32,
  gap = 4,
  hair,
  shirt,
  pants,
  shoes,
  tone,
}: PixelCrowdProps) {
  const seeds = useMemo(
    () => Array.from({ length: count }, (_, i) => generateSeed(i)),
    [count],
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: `${gap}px`, alignItems: 'flex-end' }}>
      {seeds.map((seed, i) => (
        <PixelPerson
          key={i}
          size={size}
          hair={hair}
          shirt={shirt}
          pants={pants}
          shoes={shoes}
          tone={tone}
          _seed={seed}
        />
      ))}
    </div>
  );
}
