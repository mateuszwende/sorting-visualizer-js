import {
  visualizeBlocks,
  visualizeSwapBlocks,
  visualizeBlock,
  createValuesArrFromBlocks,
} from "../helpers/block";
import getCurrentSpeed from "../helpers/getCurrentSpeed";
import {
  greenColor,
  redColor,
  baseColor,
  yellowColor,
} from "../helpers/colors";
import { withEndVisualization } from "../helpers/withEndVisualization";

const partition = async (arr, start, end, blocks, isStopped) => {
  let i = start + 1;
  let piv = arr[start];

  await visualizeBlock(blocks[start], yellowColor, getCurrentSpeed());

  for (let j = start + 1; j <= end; j++) {
    if (isStopped()) return;

    const speed = getCurrentSpeed();

    await visualizeBlocks(blocks[i], blocks[j], greenColor, speed);

    if (arr[j] < piv) {
      await visualizeBlocks(blocks[i], blocks[j], redColor, speed);

      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      // Swap
      await visualizeSwapBlocks(blocks[i], blocks[j], speed);
      await visualizeBlocks(blocks[i], blocks[j], baseColor, speed);

      i++;
    } else {
      await visualizeBlocks(blocks[i], blocks[j], baseColor, speed);
    }
  }
  // Put pivot in its proper place
  const temp = arr[start];
  arr[start] = arr[i - 1];
  arr[i - 1] = temp;

  await visualizeSwapBlocks(blocks[start], blocks[i - 1], getCurrentSpeed());
  await visualizeBlocks(
    blocks[start],
    blocks[i - 1],
    baseColor,
    getCurrentSpeed()
  );

  return i - 1;
};

const quickSortAlgo = async (arr, start, end, blocks, isStopped) => {
  if (start < end) {
    let pivotPos = await partition(arr, start, end, blocks, isStopped);
    if (isStopped()) return;

    await quickSortAlgo(arr, start, pivotPos - 1, blocks, isStopped);
    await quickSortAlgo(arr, pivotPos + 1, end, blocks, isStopped);
  }
};

const quickSort = async (blocks, n, isStopped) => {
  const arr = createValuesArrFromBlocks(blocks);

  await quickSortAlgo(arr, 0, n - 1, blocks, isStopped);
};

export default withEndVisualization(quickSort);
