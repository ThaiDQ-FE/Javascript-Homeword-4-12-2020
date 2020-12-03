var array = [];

var spanResult = document.getElementById('spanResult');

document.getElementById('btnCheck').addEventListener('click', function () {
    switch (document.getElementById('chooseOption').value) {
        case 'opSum':
            sumPositive();
            break;
        case 'opCount':
            countPositive();
            break;
        case 'opSmall':
            findSmallest();
            break;
        case 'opSmallPositive':
            findSmallPositive();
            break;
        case 'opLast':
            findLastPositive();
            break;
        case 'opChange':
            changePosition(array,+document.getElementById('txtFPosition').value,+document.getElementById('txtSPosition').value);
            break;
        case 'opSort':
            sortAscending();
            spanResult.innerHTML = 'Before: ' + array + '<br/>' + 'After: '  + tempArray;
            break;
        
        default:
            break;
    }
})


function addArray() {
    array.push(+document.getElementById('txtInteger').value);
    document.getElementById('txtInteger').value='';
    console.log(array);
}

function sumPositive() {
    var number = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0){
            number.push(array[index]);
        }
    }
    total = number.reduce((a, b) => a + b, 0);
    spanResult.innerHTML = 'Positive numbers are: ' +  number + '<br/>' + 'Sum: ' + total;
}

function countPositive() {
    var count = 0;
    var number = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0){
            number.push(array[index]);
            count++;
        }
    }
    spanResult.innerHTML = 'Total positive number: ' + count + '<br/>' + 'Positive numbers are: ' + number;
}

function findSmallest() {
    sortAscending();
    spanResult.innerHTML = 'Array: ' + array + '<br/>' + 'Smallest number: '  + tempArray[0];
}

function findSmallPositive() {
    var tempNumber = [];
    sortAscending();
    for (let index = 0; index < tempArray.length; index++) {
        if(tempArray[index] > 0){
            if(tempArray[index] % 2 == 0){
                tempNumber.push(tempArray[index]);
            }    
        }
    }
    spanResult.innerHTML = 'Array: ' + array + '<br/>' + 'Smallest positive number: '  + tempNumber[0];
}

function findLastPositive() {
    var last = -1;
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0){
            last = array[index];
        }
    }
    spanResult.innerHTML = 'Array: ' + array + '<br/>' + 'The Last positive number: '  + last;
    return last;
}

function changePosition(array,first,second) {
    copyArray();
    var tempPosition = array[first];
    array[first] = array[second];
    array[second] = tempPosition;
    spanResult.innerHTML = 'Array: ' + tempArray + '<br/>' + 'After change: '  + array;
}

function sortAscending() {
    copyArray();
    for (let index = 0; index < tempArray.length - 1; index++) {
        if(tempArray[index] > tempArray[index + 1]){
            var temp = tempArray[index];
            tempArray[index] = tempArray[index + 1];
            tempArray[index + 1] = temp;
            index = -1;
        }        
    }
    return tempArray;
}

function copyArray() {
    return tempArray = array.slice(0);
}