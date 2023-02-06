let vehicle={
    make:'Ford',
    model:'Mustang',
    price:'$320,000/=',
    getMake: function(model) {
        return this.model;
    },
    getModel: function(make) {
        return this.make;
    },
    getPrice: function(price) {
        return this.price;
    }
};
//declaring the car make.
let client=vehicle.getMake;
let clientMake=client.bind(vehicle);
  console.log( "The car make is:-->",clientMake());

  //declaring the car model.
  let clientmodel=vehicle.getModel;
    var clientModel=clientmodel.bind(vehicle);
    console.log("The Model is:-->",clientModel());

 //declaring the car price model.
 const clientPrice=vehicle.getPrice;
  const clientprice=clientPrice.bind(vehicle);
   console.log("The Price is:-->",clientprice(),'only.');

//Apartment 1.
   let Apartment={
    Name1:'Maisha Hostels',
     getName1: function (){
        return this.Name1;
     },
    price1:'10,000/=',
    getPrice1:  function (){
        return this.price1;
    },

//Apartment 2
Name2:'Angies',
getName2: function (){
    return this.Name2;
},
price2:'9000/=',
getPrice2: function (){
    return this.price2;
},

//Apartment 3.
Name3:'Alwake',
getName3: function (name) {
    return this.Name3;
},
price3:'7000/=',
getPrice3: function (){
 return this.price3;
}
}

//Assign varibles to the object .
  //Apartment 1.
var Apartment1 = Apartment.getName1;
var apartment1 =Apartment1.bind(Apartment);
  console.log(apartment1());


  let housePrice1=Apartment.getPrice1;
   let HousePrice1= housePrice1.bind(Apartment);
   console.log('Rent =',HousePrice1());

   //Apartment 2

let Apartment2=Apartment.getName2;
  let apartment2=Apartment2.bind(Apartment);
  console.log(apartment2());

  var housePrice2=Apartment.getPrice2;
   var HousePrice2=housePrice2.bind(Apartment);
   console.log('Rent =',HousePrice2());

   //Apartment 3.
   let Apartment3=Apartment.getName3;
    let apartment3=Apartment3.bind(Apartment);
    console.log(apartment3());
    
   const housePrice3=Apartment.getPrice3;
    const houseprice3=housePrice3.bind(Apartment);
    console.log('Rent =',houseprice3(),'only.');
