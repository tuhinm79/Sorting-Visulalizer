import React from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSort.js";
import "./SortingVisualizer.css";
import { bubbless } from "../sortingAlgorithms/bubbleSort.js";
import { HeapSort } from "../sortingAlgorithms/heapSort.js";
import { QuickSort } from "../sortingAlgorithms/quicksort.js";
import { InsertionSort } from "../sortingAlgorithms/InsertionSort.js";
let ts = 0;
let sss = 0.5;
let NUMBER_OF_ARRAY_BARS = 165;
const PRIMARY_COLOR = "turquoise";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    clearTimeout();
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 550));
    }
    this.setState({ array });
  }

  mergeSort() {
    ts=0;
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(N)";

    clearTimeout();
    this.disable_buttons();
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        // const [barOneIdx, barTwoIdx] = animations[i];
        // const barOneStyle = arrayBars[barOneIdx].style;
        // const barTwoStyle = arrayBars[barTwoIdx].style;
        // const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        // setTimeout(() => {
        //   barOneStyle.backgroundColor = color;
        //   barTwoStyle.backgroundColor = color;
        // }, (ts += 15 * sss));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, (ts += 15 * sss));
      }
    }
    // ts = 0;
    clearTimeout();
    this.enable_buttons();
  }

  quickSort() {
    ts=0;
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(log N)";
    clearTimeout();
    console.log("a");
    this.disable_buttons();
    const animations = QuickSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      console.log("d");
      const arrayBars = document.getElementsByClassName("array-bar");
      const [bar1, bar2, bar1height, bar2height] = animations[i];
      const bar1style = arrayBars[bar1].style;
      const bar2style = arrayBars[bar2].style;
      setTimeout(() => {
        bar1style.height = `${bar2height}px`;
        bar2style.height = `${bar1height}px`;
      }, (ts += 15 * sss));
    }

    // ts = 0;
    clearTimeout();
    this.enable_buttons();
  }

  heapSort() {
    ts = 0;
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(1)";
    clearTimeout();
    this.disable_buttons();
    const animations = HeapSort(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [bar1, bar2, bar1height, bar2height] = animations[i];
      const bar1style = arrayBars[bar1].style;
      const bar2style = arrayBars[bar2].style;
      setTimeout(() => {
        bar1style.height = `${bar2height}px`;
        bar2style.height = `${bar1height}px`;
      }, (ts += 15 * sss));
    }
    // ts = 0;
    clearTimeout();
    this.enable_buttons();
  }

  bubbleSort() {
    ts = 0;
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";
    document.getElementById("Space_Worst").innerText = "O(1)";
    clearTimeout();
    this.disable_buttons();
    const animations = bubbless(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [bar1, bar2, bar1height, bar2height] = animations[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      const bar1style = arrayBars[bar1].style;
      const bar2style = arrayBars[bar2].style;
      setTimeout(() => {
        bar1style.height = `${bar2height}px`;
        bar2style.height = `${bar1height}px`;
      }, (ts += 15 * sss));
    }
    // ts = 0;
    clearTimeout();
    this.enable_buttons();
  }

  insertionSort() {
    ts = 0;
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";
    document.getElementById("Space_Worst").innerText = "O(1)";
    clearTimeout();
    console.log("a");
    this.disable_buttons();
    const animations = InsertionSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      console.log("d");
      const arrayBars = document.getElementsByClassName("array-bar");
      const [bar1, bar2, bar1height, bar2height] = animations[i];
      const bar1style = arrayBars[bar1].style;
      const bar2style = arrayBars[bar2].style;
      setTimeout(() => {
        bar1style.height = `${bar2height}px`;
        bar2style.height = `${bar1height}px`;
      }, (ts += 15 * sss));
    }
    // ts = 0;
    clearTimeout();
    this.enable_buttons();
  }

  enable_buttons() {
    var butts_algos = document.querySelectorAll(" button");
    var inp_as = document.getElementById("a_size");
    window.setTimeout(function () {
      for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_unselected");
        butts_algos[i].disabled = false;
        inp_as.disabled = false;
      }
    }, (ts += sss));
  }
  disable_buttons() {
    var butts_algos = document.querySelectorAll(" button");
    var inp_as = document.getElementById("a_size");
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].classList = [];
      butts_algos[i].classList.add("butt_locked");
      butts_algos[i].disabled = true;
      inp_as.disabled = true;
    }
  }
  handleChange(event) {
    NUMBER_OF_ARRAY_BARS = event.target.value;
  }
  barwidth() {
    let b = 500 / NUMBER_OF_ARRAY_BARS;
    return b;
  }
  render() {
    const { array } = this.state;
    return (
      <div className="container">
        <div className="button-container">
          <input
            id="a_size"
            type="range"
            min={20}
            max={310}
            step={1}
            defaultValue={165}
            value={this.state.value}
            onChange={this.handleChange}
            onClick={() => this.resetArray()}
          ></input>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
        <br></br>
        <div className="sort-container">
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                  width: `${this.barwidth()}px`,
                }}
              ></div>
            ))}
          </div>
          <div className="about-sort">
            <div
              class="Complexity_Containers"
              id="Time_Complexity_Types_Container"
            >
              <h3>
                <u>TIME COMPLEXITY</u>
              </h3>

              <br />
              <div class="Pair_Definitions">
                <p class="Sub_Heading">Worst case: </p>
                <p id="Time_Worst"></p>
              </div>

              <br />
              <div class="Pair_Definitions">
                <p class="Sub_Heading">Average case: </p>
                <p id="Time_Average"></p>
              </div>

              <br />
              <div class="Pair_Definitions">
                <p class="Sub_Heading">Best case: </p>
                <p id="Time_Best"></p>
              </div>

              <br />
            </div>
            <br />

            <br />
            <br />
            <br />
            <div>
              <h3>
                <u>SPACE COMPLEXITY</u>
              </h3>
              <br />
              <div class="Pair_Definitions">
                <p class="Sub_Heading">Worst case: </p>
                <p id="Space_Worst"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
