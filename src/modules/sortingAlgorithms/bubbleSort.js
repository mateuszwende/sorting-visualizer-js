import {
  visualizeSwapBlocks,
  visualizeBlock,
  visualizeBlocks,
  createValuesArrFromBlocks,
} from "../utils/block";
import { greenColor, redColor, baseColor, purpleColor } from "../utils/colors";
import getCurrentSpeed from "../utils/getCurrentSpeed";

export const bubbleSort = async (blocks, n) => {
  const arr = createValuesArrFromBlocks(blocks);

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      const speed = getCurrentSpeed();

      await visualizeBlocks(blocks[i], blocks[i + 1], greenColor, speed);
      if (arr[i] > arr[i + 1]) {
        await visualizeBlocks(blocks[i], blocks[i + 1], redColor, speed);

        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        await visualizeSwapBlocks(blocks[i], blocks[i + 1], speed);

        swapped = true;
      }
      await visualizeBlocks(blocks[i], blocks[i + 1], baseColor, speed);
    }
  } while (swapped);

  const speed = getCurrentSpeed();
  for (let j = 0; j < n; j++) {
    await visualizeBlock(blocks[j], purpleColor, speed + 100);
  }
};
