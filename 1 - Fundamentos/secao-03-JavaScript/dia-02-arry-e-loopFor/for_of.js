// for/of
let word = 'Hello'
for (let char of word) {
    console.log(char) 
}
// H
// e
// l
// l
// o

// for/of com array
let names = ['João', 'Paulo', 'Pedro']
for (let name of names) {
    console.log(name)
}
// João
// Paulo
// Pedro

// for/of com array de objetos
let people = [{
    name: 'João',
    age: 20
}, {
    name: 'Paulo',
    age: 25
}, {
    name: 'Pedro',
    age: 30
}]
for (let person of people) {
    console.log(person)
}
// { name: 'João', age: 20 }
// { name: 'Paulo', age: 25 }
// { name: 'Pedro', age: 30 }

//while
let i = 0
while (i < 10) {
    console.log(i)
    i++
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
