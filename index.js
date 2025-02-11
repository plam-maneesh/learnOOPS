class car{

    constructor( model) {

       this.model = model;


    }

    getModel(){

        return this.model;



    }


}




let myCar = new car('bmw');

console.log(myCar.getModel());  