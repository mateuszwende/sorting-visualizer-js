import "./assets/sass/main.scss";
import {
  createBlock,
  updateBlock,
  setBlockBackground,
} from "./modules/utils/block";
import { getRandomNum } from "./modules/utils/getRandomNum";
import { bubbleSort } from "./modules/sortingAlgorithms/bubbleSort";
import { mergeSort } from "./modules/sortingAlgorithms/mergeSort";
import { quickSort } from "./modules/sortingAlgorithms/quickSort";
import { baseColor } from "./modules/utils/colors";
import asyncDelay from "./modules/utils/asyncDelay";

const sortAlgorithms = {
  bubble: {
    name: "Bubble Sort",
    func: bubbleSort,
  },
  merge: {
    name: "Merge Sort",
    func: mergeSort,
  },
  quick: {
    name: "Quick Sort",
    func: quickSort,
  },
};

// Add template
class SortingVisualizer {
  constructor(containerId, width, height, n, speed) {
    this.containerId = containerId;
    this.width = width;
    this.height = height;
    this.n = n;
    this.nMin = 4;
    this.nMax = 100;
    this.speed = speed;
    this.speedMin = 1;
    this.speedMax = 500;
    this.isSorting = false;
    this.currentAlgorithm = sortAlgorithms["bubble"].func;
  }

  initialize() {
    this.createNav(sortAlgorithms);
    this.createBlocks(this.n);
    this.addEventListeners();
    this.setRangeInputProperties();
  }

  addEventListeners() {
    this.addElementsValInputEventListeners();
    this.addBtnsEventListeners();
    this.addNavAlgoElemsEventListeners();
  }

  addElementsValInputEventListeners() {
    const elementsValInput = document.getElementById("elementsNum");

    elementsValInput.addEventListener("change", (e) => {
      const n = e.target.value;
      this.n = n;
      this.createBlocks(n);
    });
  }

  addBtnsEventListeners() {
    const sortBtn = document.getElementById("sortBtn");
    const randomizeBtn = document.getElementById("randomizeBtn");

    sortBtn.addEventListener("click", async (e) => {
      if (!this.isSorting) {
        e.target.disabled = true;
        randomizeBtn.disabled = true;
        this.isSorting = true;

        const blocks = document.querySelectorAll(".block");
        await this.prepareBlocksForSort(blocks);
        await this.currentAlgorithm(blocks, this.n);

        e.target.disabled = false;
        randomizeBtn.disabled = false;
        this.isSorting = false;
      }
    });

    randomizeBtn.addEventListener("click", () => {
      if (!this.isSorting) {
        const blocks = document.querySelectorAll(".block");
        this.randomizeBlocks(blocks);
      }
    });
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        elems.forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        this.currentAlgorithm =
          sortAlgorithms[e.target.dataset.algorithmKey].func;
      });
    });
  }

  setRangeInputProperties() {
    const elementsNumInput = document.getElementById("elementsNum");
    elementsNumInput.setAttribute("min", this.nMin);
    elementsNumInput.setAttribute("max", this.nMax);
    elementsNumInput.setAttribute("value", this.n);

    const speedValInput = document.getElementById("speedVal");
    speedValInput.setAttribute("min", this.speedMin);
    speedValInput.setAttribute("max", this.speedMax);
    speedValInput.setAttribute("value", this.speed);
    speedValInput.style.direction = "rtl";
  }

  createBlocks(n) {
    this.clearContainer();
    const blockWidth = Math.floor(this.width / n);

    for (let i = 0; i < n; i++) {
      createBlock(
        this.containerId,
        blockWidth,
        getRandomNum(this.height),
        baseColor
      );
    }
  }

  randomizeBlocks(blocks) {
    blocks.forEach((block) => {
      updateBlock(block, getRandomNum(this.height));
      setBlockBackground(block, baseColor);
    });
  }

  async prepareBlocksForSort(blocks) {
    blocks.forEach((block) => {
      setBlockBackground(block, baseColor);
    });
    await asyncDelay(this.speed);
  }

  createNav(algorithms) {
    const nav = document.getElementById("nav");

    for (let [key, algo] of Object.entries(algorithms)) {
      const elem = document.createElement("div");
      elem.classList = "nav-algorithm-js";
      elem.innerText = algo.name;
      elem.dataset.algorithmKey = key;
      nav.appendChild(elem);
    }
  }

  clearContainer() {
    document.getElementById(this.containerId).innerHTML = "";
  }
}

const sortingVisualizer = new SortingVisualizer("container", 1200, 600, 4, 50);
sortingVisualizer.initialize();
