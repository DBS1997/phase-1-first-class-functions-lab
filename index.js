returnFirstTwoDrivers = function (drivers){
    return [drivers[0], drivers[1]]
}
returnLastTwoDrivers = function (drivers){
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

createFareMultiplier = function (multiplier){
    return function(fare){return fare * multiplier}
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

selectDifferentDrivers = function (drivers, func,){
    return func(drivers)
    
}