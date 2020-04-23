import "./assets/sass/main.scss";
import SortingVisualizer from "./modules/sorting-visualizer/SortingVisualizer";
import { bubbleSort, mergeSort, quickSort } from "./modules/sortingAlgorithms";

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

const sortingVisualizer = new SortingVisualizer(
  sortAlgorithms,
  "container",
  1200,
  600,
  4,
  50
);
sortingVisualizer.initialize();
