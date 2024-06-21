//Cau 1
// let arr1 = [1, 2, 3, 5];
// let arr2 = [...arr1];

// console.log(arr2);



// let arr1 = [1, 2, 3, 5];
// let arr2 = arr1.concat();

// console.log(arr2);





// //Cau 2
// let arrA = ['Hello', 'Xin chào'];
// let arrB = ['Bonjour', 'Olá'];
// let waysToSayHello = [...arrA, ...arrB];

// console.log(waysToSayHello);




// let arrA = ['Hello', 'Xin chào'];
// let arrB = ['Bonjour', 'Olá'];
// let waysToSayHello = arrA.concat(arrB);

// console.log(waysToSayHello);


// Cau 3
// const arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];


// const arrSquare = arrX.map(num => num ** 2);

// console.log(arrSquare); 


// const arrOdds = arrX.filter(num => num % 2 !== 0);

// console.log(arrOdds); 

// Cau 6


let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game", "sleep", "learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game", "sick", "study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game", "sick", "learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game", "sleep", "learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game", "sick", "study"]
    }
]



// ý 1

// var ageFind = prompt('Độ tuổi cần tìm?' )
//  function searchByage() {
//      for(let i=0; i<student.length; i++){
//          if(student[i].age == ageFind){
//             console.log(student[i].name)
//          }

//      }
//  }

//  searchByage()


// Ý 2

// var hobbiesFind = prompt('Sở thích cần tìm?')
// function searchByhobbies() {
//     for (let i = 0; i < student.length; i++) {
//         for (let y = 0; y < student[i].hobbies.length; y++) {
//             if (student[i].hobbies[y] == hobbiesFind) {
//                 console.log('Tên:'+student[i].name + '' +' và sở thích:'+ student[i].hobbies)
//             }

//         }
//     }
// }

// searchByhobbies()






// Ý 3
// function filterAndPrintByHobbyStudy() {
//     let result = student.filter(s => s.hobbies.includes("study"));
//     result.forEach(s => console.log(s));
// }
// filterAndPrintByHobbyStudy()






// Ý 4
// function changeAgeFrom11to15() {
//     student = student.map(s => {
//         if (s.age === 11) {
//             s.age = 15;
//         }
//         return s;
//     });
// }
// changeAgeFrom11to15()


