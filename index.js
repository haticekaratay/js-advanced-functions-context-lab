function createEmployeeRecord([firstName,familyName,title,payRate]){
    return{
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payRate,
        timeInEvents: [],
        timeOutEvents: []
    }
};

function createEmployeeRecords(allEmployees){
    return allEmployees.map(createEmployeeRecord)
};
function createTimeInEvent(time){
    
    let hour = time.split(" ")[1]
    let date = time.split(" ")[0]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this;
};

function createTimeOutEvent(time){

    let hour = time.split(" ")[1]
    let date = time.split(" ")[0]
    this.timeOutEvents.push({
       type: "TimeOut",
       date: date,
       hour: parseInt(hour)
   })
   return this;
};

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(timeIn=>timeIn.date === date).hour
    let timeOut = this.timeOutEvents.find(timeOut=>timeOut.date === date).hour
    return (timeOut- timeIn)/100
};

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable
};

function calculatePayroll(employees){
    return employees.reduce((sum,employee) => sum + allWagesFor.call(employee),0)
};

function findEmployeeByFirstName(employeesArray,name){
   return employeesArray.find(employee => employee.firstName === name);
}

