"use strict";
/* function calculateWeeklySteps(steps:number[]):number{

    let total = steps.reduce((sum,num)=> sum + num,0)
    return total
}

console.log(calculateWeeklySteps([3000, 5200, 4100])); */
Object.defineProperty(exports, "__esModule", { value: true });
function getDistanceSummary(distances) {
    let total = distances.reduce((sum, num) => sum + num, 0);
    let average = total / distances.length;
    return {
        total,
        average: isNaN(average) ? 0 : average
    };
}
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([]));
// { total: 24, average: 6 }
//# sourceMappingURL=pr3.js.map