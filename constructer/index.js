

  //Question-1: Suppose you’re building a reservation system for a hotel. Write a constructor function Room that creates a room object with properties like roomNumber, type, price, and isAvailable. Hint: Use the new keyword to create new room objects.

  function Hotel(roomNumber,type,price,isAvailable){
    this.roomNumber=roomNumber;
    this.type=type;
    this.price=price;
    this.isAvailable=isAvailable;
  }

  const room = new Hotel("101","deluxe-single","1200/-","Available")
  console.log(room);

  const room2 = new Hotel("201","super deluxe-for two","2000/-","not available")
  console.log(room2);
  
  const room3 = new Hotel("202", "suite with jacuzii", "2800", "Available")
  console.log(room3);
  
  const room4 = new Hotel("203","premium-suite","4200/-","Available")
  console.log(room4);
  
//   Question-2: Design a constructor function Course that generates an object representing an online course with properties like title, instructor, duration, and studentsEnrolled. Hint: Use the this keyword to assign values to each property.

function Course(title,instructor,duration,studentsEnrolled){
    this.title= title;
    this.instructor= instructor;
    this.duration= duration;
    this.studentsEnrolled= studentsEnrolled;
}
const c1 = new Course("JavaScript", "Prabhat sir", "3 Months", "4 Students");
console.log(c1);

const c2= new Course("Html","Dipak Sir", "2 Months","5 Students");
console.log(c2);

const c3= new Course("CSS", "Sonal Mam", "1.5 Months","5 Students");
console.log(c3);

const c4 = new Course("Bootstrap", "Chetan Sir", "! Month", "4 Students")
console.log(c4);

// Question-3: Create a constructor function Wallet that initializes a wallet object with properties like ownerName, balance, and currency. Include a method that allows the owner to add money to the wallet. Hint: Add methods inside the constructor to handle wallet operations.

 function Wallet(ownerName,balance,currency){
    this.ownerName= ownerName;
    this.balance= +balance;
    this.currency= currency;
    this.addmoney=  function (amount){
        this.balance = this.balance + amount
    };
}
const b1 = new Wallet("Dharmik","451000","Indian Rupeese")
b1.addmoney(100000)
console.log(b1);

const b2 = new Wallet("Harpal","200000","Indian Rupeese")
b2.addmoney(19000)
console.log(b2);

const b3 = new Wallet("Darshan","10000","Indain ruppese","20000")
b3.addmoney(1000);
console.log(b3)


// Question-4: Write a constructor function Weather that creates a weather object with properties like city, temperature, humidity, and forecast. Create a method to update the forecast. Hint: Use the constructor to set initial values, and add a method to update properties.

function Weather(city,temperature,humidity,forecast){
    this.city=city;
    this.temperature=temperature;
    this.humidity=humidity;
    this.forecast=forecast;
    this.updateforecast=function($){

    }

}









  