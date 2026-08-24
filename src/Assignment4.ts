

function getBatteryStatus(percentage: number): string {

    let batteryStatus: string
    return batteryStatus = percentage >= 0 && percentage <= 20 ? "Low" : percentage >= 21 && percentage <= 50 ?
    "Medium" : percentage >= 51 && percentage <= 90 ? "High" : percentage>=91 && percentage<=100? "Full": "Full"
}


// --------------------Problem 2-------------------

 interface Booking {
    name: string
    guests: number
    time: string
}


let formatBookingConfirmation =( booking: Booking) : string =>{
    let {name, guests, time} = booking
    return `${name}'s table for ${guests} guests is confirmed at ${time}`
}



// -------------------problem 3----------

let calculateWeeklyTotal =(expenses: number[]):number =>{
    if(expenses.length === 0){
        return 0
    }
    else{
        let total = expenses.reduce((sum, num)=> sum + num,0)
        return total
    }
}


// --------------------------Problem 4--------------

type union  = 'red' | 'yellow' | 'green'

let getTrafficAction = (light : union): string =>{
    let signal: string;
    return signal = light === 'red'? "Stop" : light === 'yellow' ? "Slow Down" : "Go"
}


// -------------------------Problem 5--------------------

interface output{
    total : number,
    average: number
    }



let getQuizSummary =(scores: number[]): output  =>{

    // let total: number = 0;
    // let total: number = 0;

    let total = scores.reduce((sum,num) => sum + num,0)
    let average = total / scores.length

    return{
        total,
        average : isNaN(average)? 0 : average
    }
    
}