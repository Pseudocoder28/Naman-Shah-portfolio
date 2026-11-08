// The rings behind each section, in the SVG's -100..100 box: an ellipse's two radii and its tilt in
// degrees. Two near-circles and two tilted planes, as on an astrolabe.
export const ORBITS = [
  { rx: 96, ry: 34, tilt: -20, start: 0.6, turns: 0.55 },
  { rx: 80, ry: 46, tilt: 28, start: 2.4, turns: -0.4 },
  { rx: 58, ry: 56, tilt: 0, start: 4.1, turns: 0.3 },
  { rx: 34, ry: 14, tilt: -8, start: 1.2, turns: -0.7 },
] as const;

export type Orbit = (typeof ORBITS)[number];

/**
 * Where a pip sits on its orbit when the section is `progress` (0 to 1) of the way through the
 * screen: its start angle plus its share of turns. It's behind the hub on the far half of the ring.
 */
export function orbitPoint({ rx, ry, tilt, start, turns }: Orbit, progress: number) {
  const a = start + turns * 2 * Math.PI * progress;
  const t = (tilt * Math.PI) / 180;
  const [ex, ey] = [rx * Math.cos(a), ry * Math.sin(a)];
  return {
    x: +(ex * Math.cos(t) - ey * Math.sin(t)).toFixed(2),
    y: +(ex * Math.sin(t) + ey * Math.cos(t)).toFixed(2),
    behind: Math.sin(a) < 0,
  };
}
