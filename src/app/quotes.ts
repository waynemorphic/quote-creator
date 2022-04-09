export class Quotes {
    showDescription: boolean;
    constructor (
        public quote: string,
        public name: string,
        public description: string,
    ){
        this.showDescription=false;
    }
     

}

//exported class Quotes to avail it everywhere in the application

//defined quote and name of type string

//to do output binding, we will use public access modifier in the 
// class properties so that they are available outside the class

//constructor function enables the definition of logic initialization 
// for creating an object

//showDescription is a poperty declared to hide the class Quotes
// description property