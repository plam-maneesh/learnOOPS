class car{

    constructor( model) {

       this.model = model; // encapsulation : we can't access the model property from outside the class


    }

    getModel(){  

         return this.model; 



    }


}


let myCar = new car('bmw');

console.log(myCar.getModel());  


