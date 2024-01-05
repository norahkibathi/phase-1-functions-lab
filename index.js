function distanceFromHqInBlocks(street) {
    const hqStreet = 42; 
    return Math.abs(street - hqStreet); 
}
function distanceFromHqInFeet(street) {
    const feePerBlock = 264; 
    const blocks = distanceFromHqInBlocks(street);
    return blocks * feePerBlock; 
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    const startFromHq = distanceFromHqInBlocks(start); 
    const destinationFromHq = distanceFromHqInBlocks(destination); 
    if (destinationFromHq >= startFromHq) {
        return (destinationFromHq - startFromHq) * feetPerBlock; 
        return (startFromHq - destinationFromHq) * feetPerBlock; 
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
               return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
                return 'cannot travel that far';
    }
}
