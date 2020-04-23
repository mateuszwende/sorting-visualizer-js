import getCurrentSpeed from "./getCurrentSpeed";
import { visualizeBlock } from "./block";
import { purpleColor } from "./colors";

export const withEndVisualization = (func) => async (blocks, n, isStopped) => {
  await func(blocks, n, isStopped);

  if (isStopped()) return;

  const speed = Math.min(getCurrentSpeed() + 1000 / n);
  for (let j = 0; j < n; j++) {
    await visualizeBlock(blocks[j], purpleColor, speed);
  }
};
