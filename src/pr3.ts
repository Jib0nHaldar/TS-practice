/* function calculateWeeklySteps(steps:number[]):number{

    let total = steps.reduce((sum,num)=> sum + num,0)
    return total
}

console.log(calculateWeeklySteps([3000, 5200, 4100])); */

/* interface Iteam { name: string; price: number; }

function calculateOrderTotal(items : Iteam[]):number{
    let total = items.reduce((sum,item)=> sum + item.price, 0)

    return total;
}

console.log(calculateOrderTotal([{name:"Burger",price:250},{name:"Fries",price:90},{name:"Soda",price:60}]));
console.log(calculateOrderTotal([{name:"Pizza",price:500}]));
console.log(calculateOrderTotal([])); */
/* 
type Weather = 'sunny' | 'rainy' | 'cloudy'

let getWeatherAdvice = (weather: Weather): string => {
    if (weather === "sunny") {
        return "Wear sunscreen"
    }
    if (weather === 'rainy') {
        return "Carry an umbrella"
    }
    return "Bring a light jacket"

   return weather === 'sunny'? "Sunglass" : weather ==='rainy'? "Umbrella" : "Jacket" //using ternary operator
}

console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));
 */

/* 
interface Employee { name: string; onDuty: boolean; }

function findOnDutyEmployees(employees:Employee[]):Employee[]{
  let isOnDuty = employees.filter(employee => employee.onDuty === true)
  return isOnDuty
}

console.log(findOnDutyEmployees([{name:"Lima",onDuty:true},{name:"Karim",onDuty:false}])); */

interface Distance {
    total: number,
    average: number
}

function getDistanceSummary(distances:number[]):Distance {
    let total = distances.reduce((sum, num)=> sum + num,0)
    let average = total /  distances.length
    return{
        total,
        average : isNaN(average) ? 0: average
    }
}


console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([]));

// { total: 24, average: 6 }