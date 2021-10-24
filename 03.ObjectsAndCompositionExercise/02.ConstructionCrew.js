function solve2(obj) {
    if(obj.dizziness == true){
        obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
        obj.dizziness = false;
        return obj;
         
    } else {
        return obj;
    }
}

console.log(solve2({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ))

console.log(solve2({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));

  