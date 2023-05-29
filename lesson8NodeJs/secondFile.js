

const person1 = {
    name : "Arya",
    age : 15
}

const person2 = {
    name : "Rob",
    age : 20
}

const personSleeping = (personObj)=> {
    console.log(`the person ${personObj.name} with age 
     ${personObj.age} is sleeping ZZZZZzzzz`)
}


module.exports = {
    person1,
    person2,
    personSleeping
}