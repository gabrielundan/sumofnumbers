const data = [1,2,3,4,5]

const sumWhile = list => {
  let sum = 0;
  let i = 0;
  while (i < list.length){
    sum += list[i]
    i++
  }
  return sum
}

const sumFor = list => {
  let sum = 0;
  for(let i = 0; i < list.length; i++){
    sum += list[i]
  }
  return sum
}

const sumRecursion = list => {
  let listCopy = [...list]
  return recursionHelper(0, listCopy)
}

const recursionHelper = (sum, list) => {
  if (list.length === 0) {
    return sum
  } else {
    return recursionHelper(sum + list.pop(), list)
  }
}

const sumTheSimpleWay = list => _.reduce(list, (memo, sum) => memo + sum, 0)

console.log(`sumRecursion output: ${sumRecursion(data)}`)
console.log(`sumTheSimpleWay output: ${sumTheSimpleWay(data)}`)