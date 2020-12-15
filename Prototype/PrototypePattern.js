let myCar = {
  name :"mercedes",
  drive : function() {
    console.log("driving");
  }
}

//use object.create to instancetiate to new car
let youCar = Object.create( myCar );

//now we see the prototype of the other
console.log( youCar.name )
