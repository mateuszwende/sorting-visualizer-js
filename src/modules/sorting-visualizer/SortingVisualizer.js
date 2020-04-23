import { createBlock, updateBlock, setBlockBackground } from "../helpers/block";
import { baseColor } from "../helpers/colors";
import asyncDelay from "../helpers/asyncDelay";
import { getRandomNum } from "../helpers/getRandomNum";
import { withEndVisualization } from "../helpers/withEndVisualization";

class SortingVisualizer {
  constructor(algorithms, containerId, width, height, n, speed) {
    this.containerId = containerId;
    this.width = width;
    this.height = height;
    this.minHeight = 60;
    this.n = n;
    this.nMin = 4;
    this.nMax = 100;
    this.speed = speed;
    this.speedMin = 1;
    this.speedMax = 500;
    this.isSorting = false;
    this.isStop = false;
    this.algorithms = algorithms;
    this.currentAlgorithm = null;

    this.isStopped = this.isStopped.bind(this);
  }

  initialize() {
    this.createNav(this.algorithms);
    this.createBlocks(this.n);

    this.setInitialAlgorithm("bubble");

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
      this.n = parseInt(n, 10);
      this.createBlocks(n);
    });
  }

  addBtnsEventListeners() {
    const sortBtn = document.getElementById("sortBtn");
    const stopBtn = document.getElementById("stopBtn");
    const randomizeBtn = document.getElementById("randomizeBtn");

    sortBtn.addEventListener("click", async (e) => {
      this.isStop = false;
      if (!this.isSorting) {
        this.handleIsSortingState(true);

        const blocks = document.querySelectorAll(".block");
        await this.prepareBlocksForSort(blocks);
        await this.currentAlgorithm(blocks, this.n, this.isStopped);

        this.handleIsSortingState(false);
      }
    });

    randomizeBtn.addEventListener("click", () => {
      if (!this.isSorting) {
        const blocks = document.querySelectorAll(".block");
        this.clearBlocksColor(blocks);
        this.randomizeBlocks(blocks);
      }
    });

    stopBtn.addEventListener("click", () => {
      if (this.isSorting) {
        this.isStop = true;
        const blocks = document.querySelectorAll(".block");
      }
    });
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const isBlocked = e.target.classList.contains("blocked");
        if (isBlocked) return;

        elems.forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        this.currentAlgorithm = this.algorithms[
          e.target.dataset.algorithmKey
        ].func;
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

  setInitialAlgorithm(algoKey) {
    this.currentAlgorithm = this.algorithms[algoKey].func;
    const elems = document.querySelectorAll(".nav-algorithm-js");
    elems[0].classList.add("active");
  }

  handleIsSortingState(isSorting) {
    this.isSorting = isSorting;
    document.getElementById("sortBtn").disabled = isSorting;
    document.getElementById("randomizeBtn").disabled = isSorting;
    document.getElementById("elementsNum").disabled = isSorting;
    this.handleOtherNavAlgorithms(isSorting);
  }

  handleOtherNavAlgorithms(isSorting) {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    if (isSorting) {
      elems.forEach((elem) =>
        !elem.classList.contains("active")
          ? elem.classList.add("blocked")
          : null
      );
    } else {
      elems.forEach((elem) =>
        elem.classList.contains("blocked")
          ? elem.classList.remove("blocked")
          : null
      );
    }
  }

  createBlocks(n) {
    this.clearContainer();
    const blockWidth = Math.floor(this.width / n);

    for (let i = 0; i < n; i++) {
      createBlock(
        this.containerId,
        blockWidth,
        getRandomNum(this.minHeight, this.height),
        baseColor
      );
    }
  }

  randomizeBlocks(blocks) {
    blocks.forEach((block) => {
      updateBlock(block, getRandomNum(this.minHeight, this.height));
      setBlockBackground(block, baseColor);
    });
  }

  clearBlocksColor(blocks) {
    blocks.forEach((block) => {
      setBlockBackground(block, baseColor);
    });
  }

  isStopped() {
    return this.isStop;
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

export default SortingVisualizer;
