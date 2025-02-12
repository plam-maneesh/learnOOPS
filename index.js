class wehicale{

    constructor( model, wheels) {

       this.model = model; // encapsulation : we can't access the model property from outside the class
       this.wheels = wheels;


    }

    getModel(){  

        console.log(`Model Name: ${this.model}`);
        console.log(`Number of Weeels: ${this.wheels}`)



    }


}


class car extends wehicale{

    get getModel(){


        console.log(`Car Model Name: ${this.model} `);
        console.log(`Car Number of Weeels: ${this.wheels}`);

    }

}



let myCar = new car('bmw', 4); 

console.log(myCar.getModel());  