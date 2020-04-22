export const createBlock = (parentId, width, height, bgColor) => {
  const parent = document.getElementById(parentId);

  const block = document.createElement("div");
  block.style.width = `${width}px`;
  block.style.height = `${height}px`;
  block.style.marginRight = `${Math.floor(width / 5)}px`;
  block.style.fontSize = `${Math.floor(width / 5)}px`;
  block.style.backgroundColor = bgColor;
  block.classList = "block";

  if (width > 23) {
    block.innerText = height;
  }
  block.dataset.value = height;

  parent.appendChild(block);
};

export const getAllBlocks = () => {
  const blocks = document.querySelectorAll(".block");
  return blocks;
};

const swapProperties = (block_1, block_2, speed) => {
  const tempValue_1 = block_1.dataset.value;
  const tempBgColor_1 = block_1.style.backgroundColor;

  block_1.style.height = block_2.style.height;
  block_1.style.backgroundColor = block_2.style.backgroundColor;
  block_1.dataset.value = block_2.dataset.value;
  block_2.style.height = `${tempValue_1}px`;
  block_2.dataset.value = tempValue_1;
  block_2.style.backgroundColor = tempBgColor_1;
};

export const visualizeSwapBlocks = async (block_1, block_2, speed) => {
  await new Promise((res, rej) => {
    window.requestAnimationFrame(() => {
      swapProperties(block_1, block_2, speed);
      setTimeout(res, speed);
    });
  });
};

export const updateBlock = (block, value) => {
  block.dataset.value = value;
  block.style.height = `${value}px`;
};

export const setBlockBackground = (block, color) => {
  block.style.backgroundColor = color;
};

export const updateBlocksFromArray = (blocks, arr) => {
  for (let i = 0; i < arr.length; i++) {
    updateBlock(blocks[i], arr[i]);
  }
};

export const createValuesArrFromBlocks = (blocks) => {
  const arr = [];
  blocks.forEach((elem) => arr.push(parseInt(elem.dataset.value, 10)));
  return arr;
};

export const visualizeBlocks = (block_1, block_2, color, speed) => {
  return new Promise((res, rej) => {
    window.requestAnimationFrame(() => {
      block_1.style.backgroundColor = color;
      block_2.style.backgroundColor = color;
    });
    setTimeout(res, speed);
  });
};

export const visualizeBlock = (block, color, speed) => {
  return new Promise((res, rej) => {
    window.requestAnimationFrame(() => {
      block.style.backgroundColor = color;
    });
    setTimeout(res, speed);
  });
};
