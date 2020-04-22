import {
  visualizeBlocks,
  visualizeSwapBlocks,
  visualizeBlock,
  createValuesArrFromBlocks,
} from "../utils/block";
import getCurrentSpeed from "../utils/getCurrentSpeed";
import {
  greenColor,
  redColor,
  baseColor,
  purpleColor,
  yellowColor,
} from "../utils/colors";

const partition = async (arr, start, end, blocks) => {
  let i = start + 1;
  let piv = arr[start];

  await visualizeBlock(blocks[start], yellowColor, getCurrentSpeed());

  for (let j = start + 1; j <= end; j++) {
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

const quickSortAlgo = async (arr, start, end, blocks) => {
  if (start < end) {
    let pivotPos = await partition(arr, start, end, blocks);

    await quickSortAlgo(arr, start, pivotPos - 1, blocks);
    await quickSortAlgo(arr, pivotPos + 1, end, blocks);
  }
};

export const quickSort = async (blocks, n) => {
  const arr = createValuesArrFromBlocks(blocks);

  await quickSortAlgo(arr, 0, arr.length - 1, blocks);

  let speed = getCurrentSpeed();
  for (let j = 0; j < n; j++) {
    await visualizeBlock(blocks[j], purpleColor, speed + 100);
  }
};
