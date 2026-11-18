import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The kettle has finished, and nobody is in a hurry to pour it.',
  'Outside the window the street is emptying itself of cars, one by one, the way a tide goes out.',
  'A cat has claimed the warm square of floor where the last light lands, and does not intend to move.',
  'Breathe in slowly, the way the evening does — then let it out, and let your shoulders drop with it.',
  'The tea will still be warm in ten minutes. The evening is not going anywhere.',
  'Somewhere a clock ticks, unhurried, keeping time the way a river does — not counting, just going.',
  'You can stay here a while. Nothing needs you yet.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
