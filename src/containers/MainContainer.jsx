import React, { Component } from 'react';
import styles from '../styles.css';
import * as sortingAlgos from '../sortingAlgos/mergeSort.js'

// Change this value for the speed of the animations.
const ANIMATION_SPEED = 10;

// Change this value for the number of bars (value) in the array.
const ARRAY_BARS = 100;

// This is the main color of the array bars.
// const PRIMARY_COLOR = 'aquamarine';

// This is the color of array bars that are being compared throughout the animations.
// const SECONDARY_COLOR = 'aquamarine';

class MainContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          array: [],
		  ANIMATION_SPEED: 10,
		  MULTIPLIER: ANIMATION_SPEED / 10

      };
			this.resetArray = this.resetArray.bind(this);
			// this.mergeSort = this.mergeSort.bind(this);
			this.bubbleSort = this.bubbleSort.bind(this);
			this.insertionSort = this.insertionSort.bind(this);
			this.swap = this.swap.bind(this);

    }
    
    componentDidMount() {
        this.resetArray();
    }

	resetArray() {
		const array = [];
		for (let i = 0; i < ARRAY_BARS; i++) {
		  array.push(randomIntFromInterval(5, 730));
		}
		this.setState({array});
	  }

		bubbleSort(array, len = array.length, counter = 1200){

			if(len <= 0) return array 
			let didSwap = false;
			console.log(len, 'length')
			for(let i = 0; i < len; i++) {
				
				setTimeout(() => {
				const curr = array[i];
				const next = array[i + 1];
				
					if (next < curr) {
						array[i + 1] = curr;
						array[i] = next;
						this.setState({array})
					}	
				}, i * this.state.ANIMATION_SPEED)

				didSwap = true;
			}
			if (!didSwap) return array;

			setTimeout(() => this.bubbleSort(array, len - 1, counter - this.state.ANIMATION_SPEED), counter);
		}

		insertionSort(array) {

			for(let i = 1; i < array.length; i++) {
				setTimeout(() => {
					let j = i;
					while (j > 0 && array[j - 1] > array[j]) {
						this.swap(array, j, --j)
					}
				}, i * 400)
			}

			return array
		}
		  
		  swap(arr, a, b) {
			//   setTimeout(() => {
				console.log('swapping')
				let temp = arr[a];
				arr[a] = arr[b];
				arr[b] = temp;
				this.setState({arr});
			//   }, 50)
				
		  }
		  
		  mergeSort() {
			const animations = sortingAlgos.getMergeSort(this.state.array);
			for (let i = 0; i < animations.length; i++) {
			  const arrayBars = document.getElementsByClassName('bah');
			//   const isChange = i % 3 !== 2;
			//   if (isChange) {
			// 	const [barOneIdx, barTwoIdx] = animations[i];
			// 	const barOneStyle = arrayBars[barOneIdx].style;
			// 	const barTwoStyle = arrayBars[barTwoIdx].style;
			// 	// const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			// 	// setTimeout(() => {
			// 	//   barOneStyle.backgroundColor = color;
			// 	//   barTwoStyle.backgroundColor = color;
			// 	// }, i * ANIMATION_SPEED_MS);
			//   } else {
				setTimeout(() => {
				  const [ind, newHeight] = animations[i];
				  const oldBar = arrayBars[ind].style;
				  oldBar.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED);
			  }
			}
		//   }
		  


    render() {
      const {array} = this.state
      return (
			<div>
				<div className="arr-con">
        			{array.map((val, ind) => (
            			<div className="bah" 
							key={ind} 
							style={{height: `${val}px`}}>
          				</div>
					))}
        	</div>
			<div className="buttonsDiv">
				<button className="bodyButtons" onClick={() => this.resetArray()}>Reset Array</button>
				<button className="bodyButtons" onClick={() => this.bubbleSort(this.state.array)}>bubble sort</button>
				<button className="bodyButtons" onClick={() => this.insertionSort(this.state.array)}>insertion sort</button>
				<button className="bodyButtons" onClick={() => this.mergeSort(this.state.array)}>merge sort</button>
			</div>
				
					
			</div>
        
      );
    }
  
  }

  //////helper function/////////
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  export default MainContainer;