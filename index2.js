class NumberArray {  
    constructor() {  
        this.numbers = [];  
    }  

    // Add a number to the array  
    addNumber(num) {  
        if (typeof num === 'number') {  
            this.numbers.push(num);  
            console.log(`Added ${num}.`);  
        } else {  
            console.log("Please provide a valid number.");  
        }  
    }  

    // Remove a number from the array  
    removeNumber(num) {  
        const index = this.numbers.indexOf(num);  
        if (index > -1) {  
            this.numbers.splice(index, 1);  
            console.log(`Removed ${num}.`);  
        } else {  
            console.log(`${num} not found in the array.`);  
        }  
    }  

    // Sort the numbers in the array  
    sortNumbers() {  
        this.numbers.sort((a, b) => a - b);  
        console.log("Array sorted.");  
    }  

    // Calculate the sum of numbers in the array  
    calculateSum() {  
        const sum = this.numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  
        console.log(`Sum: ${sum}`);  
        return sum;  
    }  

    // Calculate the average of numbers in the array  
    calculateAverage() {  
        if (this.numbers.length === 0) {  
            console.log("No numbers in the array to calculate average.");  
            return 0;  
        }  
        const sum = this.calculateSum();  
        const average = sum / this.numbers.length;  
        console.log(`Average: ${average}`);  
        return average;  
    }  

    // Display the current state of the array  
    displayNumbers() {  
        console.log("Current numbers in the array:", this.numbers);  
    }  
}  

// Example usage:  
const numberArray = new NumberArray();  
numberArray.addNumber(5);  
numberArray.addNumber(10);  
numberArray.addNumber(3);  
numberArray.displayNumbers();  
numberArray.sortNumbers();  
numberArray.displayNumbers();  
numberArray.calculateSum();  
numberArray.calculateAverage();  
numberArray.removeNumber(10);  
numberArray.displayNumbers();