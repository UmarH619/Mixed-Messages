let destination = ["England", "Finland", "France", "Spain", "Switzerland", "USA", "Hawaii", "New Zealand", "Australia", "Antarctica", "China", "Japan", "Mars"];
let transport = ["walking", "driving", "plane", "boat", "rocket ship", "swimming", "skating"];
let activity = ["sightseeing", "skiing", "iceskating", "shopping", "jet skiing", "bungee jumping", "escape rooms"];

let rs1 = destination[Math.floor(Math.random() * 13)];
let rs2 = transport[Math.floor(Math.random() * 7)];
let rs3 = activity[Math.floor(Math.random() * 7)];

const createHolidayPlan = () => {
    console.log(`Your holiday destination is ${rs1}! You will get there by ${rs2} and your main activity will be ${rs3}!`)
};

createHolidayPlan();