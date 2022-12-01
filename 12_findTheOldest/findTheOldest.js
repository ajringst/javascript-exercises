const findTheOldest = function(people) {
    const isAlive = people.some(person => ("yearOfDeath" in person));
    if( isAlive == true){
        const oldest = people.sort(function(a,b) {
            const lastPerson = ("yearOfDeath" in a) ? (a.yearOfDeath - a.yearOfBirth) : (((new Date()).getFullYear()) - a.yearOfBirth);
            const nextPerson = ("yearOfDeath" in b) ? (b.yearOfDeath - b.yearOfBirth) : (((new Date()).getFullYear()) - b.yearOfBirth);
            return lastPerson > nextPerson ? -1 : 1;
        })
        //const oldestAlive = ("yearOfDeath" in oldest[0]) ? "The oldest person has deceased" : oldest[0];
        //return oldestAlive;
        return oldest[0];
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
