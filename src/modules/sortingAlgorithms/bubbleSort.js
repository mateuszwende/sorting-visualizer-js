import {
  visualizeSwapBlocks,
  visualizeBlocks,
  createValuesArrFromBlocks,
} from "../helpers/block";
import { greenColor, redColor, baseColor } from "../helpers/colors";
import getCurrentSpeed from "../helpers/getCurrentSpeed";
import { withEndVisualization } from "../helpers/withEndVisualization";

const bubbleSort = async (blocks, n, isStopped) => {
  const arr = createValuesArrFromBlocks(blocks);

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (isStopped()) return;
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
};

export default withEndVisualization(bubbleSort);
