const traps = [
    { type: "шипы", activated: false },
    { type: "огонь", activated: true },
    { type: "яд", activated: false }
  ];
 
const trapsActivated = traps.find( trap => trap.activated);
console.log(trapsActivated); //{ type: 'огонь', activated: true }
