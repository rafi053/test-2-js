// 1
const Mission1 = (array) => {
    return array.filter(num => num % 2 === 0);
}


// 2
const Mission2 = (string) => {
    return string.split(' ').filter(word => word.length === 4).length;
    
}


// 3
const Mission3 = (array) => {
    const filterArray = [...new Set(array.flat())];
    return filterArray;
}

 
// 4
const Mission6 = (num) => {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[num];
    
}


module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission6
}    
