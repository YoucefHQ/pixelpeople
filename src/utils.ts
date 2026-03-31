import { SKIN_TONE_PRESETS, HAIR_COLORS, SHIRT_COLORS, PANTS_COLORS, SHOE_COLORS } from './palettes';

// Simple deterministic hash function
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash);
}

// Seeded pseudo-random number generator (mulberry32)
function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

export function resolveSkinTone(tone: string | number | undefined, rng: () => number): string {
  if (tone === undefined) {
    const preset = Math.floor(rng() * 5) + 1;
    return SKIN_TONE_PRESETS[preset];
  }
  if (typeof tone === 'number') {
    return SKIN_TONE_PRESETS[tone] ?? SKIN_TONE_PRESETS[3];
  }
  // String: check if it's "1"-"5"
  const num = parseInt(tone, 10);
  if (num >= 1 && num <= 5 && String(num) === tone) {
    return SKIN_TONE_PRESETS[num];
  }
  // Otherwise treat as CSS color
  return tone;
}

export interface ResolvedColors {
  hair: string;
  skin: string;
  shirt: string;
  pants: string;
  shoes: string;
}

export function resolveColors(
  props: {
    hair?: string;
    shirt?: string;
    pants?: string;
    shoes?: string;
    tone?: string | number;
  },
  seed: number,
): ResolvedColors {
  const rng = mulberry32(seed);
  return {
    hair: props.hair ?? pick(HAIR_COLORS, rng),
    skin: resolveSkinTone(props.tone, rng),
    shirt: props.shirt ?? pick(SHIRT_COLORS, rng),
    pants: props.pants ?? pick(PANTS_COLORS, rng),
    shoes: props.shoes ?? pick(SHOE_COLORS, rng),
  };
}

export function generateSeed(index?: number): number {
  // Use a combination of a base seed and index for deterministic but varied results
  const base = typeof index === 'number' ? `pixelpeople-${index}` : `pixelpeople-${Math.random()}`;
  return hashCode(base);
}
