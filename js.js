
// ARRAYS
let numberArray=[1,2,3,4,5,6,7,8,9,10]

 let thirdElement=numberArray[2]
 console.log(thirdElement)

 numberArray[9]=0
 console.log(numberArray)

 numberArray.push(`end`)
 console.log(numberArray)

numberArray.shift()
 console.log(numberArray)

let arrayIndex=numberArray.indexOf(5)
console.log(arrayIndex)

let arrayIclude=numberArray.includes(8)
console.log(arrayIclude)

let arrayreverse=numberArray.reverse()
console.log(arrayreverse)

numberArray.sort(function(a,b){
  return a-b
})
console.log(numberArray)

let evenNumber=numberArray.filter(function(newNumber){
return newNumber%2===0
})
console.log(evenNumber)


// WHILE LOOP
// Aloop that prints number1-10
let myNumber=1
 while(whileNumber<=10)
 {
   console.log(whileNumber)
   whileNumber++
 }


// Array sum
 let whileNumber1=[1,2,3,4,5,6,7,8,9,10]
 let sum=0
 let i=0
 while(i<10)
 {
   sum+=whileNumber1[i]
   i++
 
 }
 console.log(`The sum of the numbers in the array is: ${sum}`)



// Largest number in array
let whileNumber=[1,2,15,4,5,6,7,8,9,10]
let j=0
let maxNo=0
while(j<whileNumber.length)
{
    maxNo=Math.max(maxNo,whileNumber[j])
    j++
}
console.log(`The largest number in this array is: ${maxNo}`)



// Correct email prompt
let correctMail=`@gmail.com`
let trial=0
while(trial<3){
  let userInput=prompt(`Enter Email adress`)
  if(userInput===correctMail)
  {
    console.log(`Login Successful`)
    break;
  }
  else{
    console.log(`Enter the correct mail`)
    trial++;

    if(trial===3)
    {console.log(`contact support`)
     break
     }  
  }
}




// FOR EACH METHOD

// Print array element
let printArray=[1,2,3,4,5]
printArray.forEach(function(myPrint){
  console.log(myPrint)
})




//Double each element
let eachArray=[1,2,3,4,5]
eachArray.forEach(function(double){
  console.log(double*2)
})



// Seperating Mixed arrays
let mixedArray=[1,2,`book`,`egg`,5,`name`]
let stringArray=[]

mixedArray.forEach(function(items){
  if(typeof items===`string`)
  {
    stringArray.push(items)
  }
})
console.log(stringArray)



// Sum of Even number Array
let sumArray=[1,2,3,4,5,6,7,8,9,10]
let evenSum=0
sumArray.forEach(function(sum){
 if(sum%2===0)
 {
 return (evenSum+=sum)
 }
})
console.log(evenSum)



// Using for Each with a condition to filter
let arrayFilter=[1,`ball`,3]
let numberArray=[]
arrayFilter.forEach(function(myFilter){
  if(typeof myFilter ===`number`)
  {
    return numberArray.push(myFilter)
  }
})
console.log(numberArray)



// OBJECT LITERALS

let myObject={
  userName:`Bob Josh`,
  userAge:21,
  address:`sun-land`
}

let store=myObject.userName//Assessing username value


myObject.userAge=25//Changing value of age property


myObject.email=`@gmail.com`//Adding a new property


delete myObject.address//Deleting a property



// FORLOOP

for(let i=1;i<=10;i++)
{
  console.log(i)
}




// Array sum
let sum1=0
let forArray=[1,2,3,4,5]
for(let i=0;i<forArray.length;i++){
 sum+=forArray[i]
}
console.log(sum1)



// Largest Number Array
let largeArray=[2,5,3,6,7]
let maxNo1=0
for(let i=0;i<largeArray.length;i++)
{
   maxNo1=Math.max(maxNo,largeArray[i])
}
console.log(maxNo1)


// Pushing the square of one array into another 
let anotherArray=[]
let thisArray=[1,2,3,4,5]
for(let i=0;i<thisArray.length;i++){
  let operation=(thisArray[i])**2
 anotherArray.push(operation)
}
console.log(anotherArray)



// Looping over an object literal
let objectArray=[
  {
    userName:`Bob Abah`,
    userAge:50
  },
  {
    userName:`josh Abah`,
    userAge:20
  }
]

for(let i=0;i<objectArray.length;i++)
{
  console.log(objectArray[i])
}


// FOR OFF LOOPS

//Print Array Elements 
let forArray1=[1,2,3,4,5]
for(let noArray of forArray1){
  console.log(noArray)
}


// Push the lenght of each string in an array into a new array
let store1=[]
let arrayList=[`name`,`book`,`school`]
for(let list of arrayList){
  if(typeof list===`string`)
  {
    store1.push(list.length)
  }
}
console.log(store)


// Iterate Over the Keys of an Object
let forObject=[
  {
    userName:`Tochi`,
    userState:`Abakaliki`
  },
  {
    userName:`Joshua`,
    userState:`Benue`
  }
]

for(let obj of forObject)
{
  let keyValue=Object.entries(obj)

  for(let [key] of keyValue){
    console.log(key)
  }
}




// Iterate Over the values of an Object
let forObject1=[
  {
    userName:`Tochi`,
    userState:`Abakaliki`
  },
  {
    userName:`Joshua`,
    userState:`Benue`
  }
]

for(let obj of forObject1)
{
  let keyValue=Object.entries(obj)

  for(let [key,value] of keyValue){
    console.log(value)
  }
}



// Iterate Over the keys and values of an Object
let forObject2=[
  {
    userName:`Tochi`,
    userState:`Abakaliki`
  },
  {
    userName:`Joshua`,
    userState:`Benue`
  }
]

for(let obj of forObject2)
{
  let keyValue=Object.entries(obj)
    console.log(keyValue)
  
}



// ADDITTIONAL QUESTIONS

// Function that removes duplicates from an array
let duplicateArray=[1,1,4,4,6,6,7,8,2]
function removeDup(duplicate){
   
   let mySet=new Set(duplicate)
   duplicate=[...mySet]
   console.log(duplicate)
}
removeDup(duplicateArray)


// Function that merges 2 arrays without duplicates
let array1=[1,2,2,3,3,4,5,6]
let array2=[1,7,7,8,8,9,5,10]
function removeDuplicate(arrayA,arrayB){
    let merger=[...arrayA,...arrayB]
    let theSet=new Set(merger)
    merger=[...theSet]
    console.log(merger)
    
}
removeDuplicate(array1,array2)


// function that checks if 2 array has 2 common elements
let array11=[1,2,2,3,3,4,5,6]
let array22=[1,7,7,8,8,9,5,10]
let newSet=new Set(array11)
let commonElements=[]
function removeDuplicate(){
  for(let second of array22)
  {
      if(newSet.has(second)){
          commonElements.push(second)
      }
  }
    
}
removeDuplicate()
console.log(`The common elements in both arrays are ${commonElements}`)



// function that prints common elements in 2 arrays
let array10=[1,2,2,3,3,4,5,6]
let array20=[1,7,7,8,8,9,5,10]
let newSet0=new Set(array10)
function removeDuplicate(){
  for(let second of array20)
  {
      if(newSet0.has(second)){
          return true
      }
      else{return false}
  }
    
}
console.log(removeDuplicate())





