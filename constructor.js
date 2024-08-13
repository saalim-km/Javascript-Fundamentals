// Constructor = a special method for defining the
//                properities and methods of objects.

function car(make,model,year,color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
}

const car1 = new car('toyota','Innova',2006,'dark blue');
console.log(car1);