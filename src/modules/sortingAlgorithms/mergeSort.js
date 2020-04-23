import {
  visualizeBlocks,
  updateBlocksFromArray,
  createValuesArrFromBlocks,
} from "../helpers/block";
import getCurrentSpeed from "../helpers/getCurrentSpeed";
import { greenColor, redColor, baseColor } from "../helpers/colors";

const mergeSort = async (blocks, n) => {
  const arr = createValuesArrFromBlocks(blocks);
  const len = n;

  for (let size = 1; size <= len; size = size * 2) {
    for (let i = 0; i < len; i += 2 * size) {
      let left = i;
      let right = Math.min(size + i, len);
      let leftTo = right;
      let rightTo = Math.min(right + size, len);

      while (left < leftTo && right < rightTo) {
        const speed = getCurrentSpeed();

        await visualizeBlocks(blocks[left], blocks[right], greenColor, speed);

        if (arr[left] >= arr[right]) {
          await visualizeBlocks(blocks[left], blocks[right], redColor, speed);

          arr.splice(left, 0, arr[right]);
          right++;
          left++;
          leftTo++;
          arr.splice(right, 1);

          await visualizeBlocks(
            blocks[left - 1],
            blocks[right - 1],
            baseColor,
            speed
          );
          updateBlocksFromArray(blocks, arr);
        } else {
          left++;
          await visualizeBlocks(
            blocks[left - 1],
            blocks[right],
            baseColor,
            speed
          );
        }
      }
    }
  }
};

export default mergeSort;
