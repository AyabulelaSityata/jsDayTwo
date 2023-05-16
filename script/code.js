let subjects = [`Python`, `C++`, `VB.Net`, `Javascript`, `Assembly`, `C##`];
// let lastElement = subjects.pop()
// console.log(lastElement);

subject.push(lastElement);
let mid = Math.floor(subjects.length/2);
let result = (subjects.length%2)==0 ? console.log(subject[mid-1] + ` `+ subjects[mid]) : console.log(subjects[mid]);

// corrections

// git checkout -b Q1

// Displaying the last element : q1
// console.log(subjects.at(-1));

// displaying the middle element: q2
// 5/2 = 2.5
let x = Math.floor(subjects.length/3)
// console.log(subjects[x]); other way:
if (x % 2 == 0) {
    console.log(subjects[x])
}else {
    console.log(subjects.slice(x-1, x + 1));
}

// function findElement(arr, index) {
//     return arr[index-1]
// }
// console.log(findElement(subjects, 4));