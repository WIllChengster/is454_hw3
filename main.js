window.addEventListener('load', () => {
    handleOnLoad();
})

function handleOnLoad() {
    const numObj = {
        start: null,
        incrementer: null,
        end: null,
    }
    let output = document.getElementById('output');

    numObj.start = Number(window.prompt('Enter the starting number:'));
    numObj.end = Number(window.prompt('Enter the ending number'));
    numObj.incrementer = Number(window.prompt('Enter the incrementer number'));
    let incrementerCheck = true
    if (numObj.start < numObj.end && numObj.incrementer < 0) {
        incrementerCheck = false;
    }
    if (numObj.start > numObj.end && numObj.incrementer > 0) {
        incrementerCheck = false;
    }

    if (isFinite(numObj.start) && isFinite(numObj.end) && isFinite(numObj.incrementer) && incrementerCheck) {
        const arr = getArray(numObj);
        const sum = getSum(arr);
        const binary = getBinary(arr);

        output.innerText = `The generated Array is: ${arr.join(', ')}\n
            The generated Sum is: ${sum} \n
            The binary of absolute values are: ${binary.join(', ')}
        `

        console.log(arr, sum, binary)
    } else {
        output.innerText = 'Invalid integer input. Please reload and try again.'
    }
}

function getArray(numObj) {
    const { start, end, incrementer } = numObj
    const arr = [];
    if (start < end) {
        for (let i = start; i <= end; i += incrementer) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += incrementer) {
            arr.push(i);
        }
    }
    return arr;
}

function getSum(arr) {
    let sum = null;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getBinary(arr) {
    const binArr = arr.map(item => (
        item.toString(2)
    ));
    return binArr;
}