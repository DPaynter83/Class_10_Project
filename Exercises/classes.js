// -------------------------------
// 🔹 GENERAL KNOWLEDGE QUESTIONS
// -------------------------------

// 1) What does OOP stand for, and why do we use it?
//Object-Oriented Programing. 

// 2) What is an object in JavaScript?

// 3) What are properties and methods? Give an example of each.

// 4) What is a class, and how is it different from an object?
//A "class" is a blueprint for objects

// 5) What is a constructor, and when is it automatically called?
//Runs when you do new
// 6) What keyword do we use to create a new instance (object) of a class?


// 7) What does the "this" keyword refer to inside a class?
// A reference 

// 8) What does "extends" mean when defining a class?

// 9) What is the purpose of the "super()" keyword inside a subclass?

// 10) Name and briefly describe the 4 pillars of OOP.
/* 1. Encapsulation --> Group your code --> protect from direct Modification
2. Abstraction --> hidden, only showing what is necesarry and hiding complexity 
 3. Inheritance --> Allows for one class to extend to another and resuce its properties and methods
 4. Polymorphism --> Allows classes to share the same method name but behave differently 
*/
// -------------------------------
// 🔹 FILL-IN-THE-BLANK 
// -------------------------------

// 1) Complete the class below so it correctly defines a Person with a name and age, 
// and a method introduce() that logs “Hi, my name is <name> and I am <age> years old.”


class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person1("Martin", 33);
person1.introduce();



// 2) Complete the following class definition for Animal.  
// It should have a constructor with species and sound parameters,
// and a makeSound() method that logs “<species> says <sound>!”


class Cat {
    constructor(animal, sound) {
        this.animal = animal;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.animal} says ${this.sound}!`);
    }
}

const cat = new Cat("Cat", "Meow");
cat.makeSound();



// -------------------------------
// 🔹 CODING EXERCISES
// -------------------------------

// 3) Add a method haveBirthday() to Person that increases the age by 1 and logs a message showing the new age.

class Person {
    constructor(birthDay, age, year){
        this.birthDay = birthDay;
        this.age = age;
        this.year = year; 
    }
 haveBirthday(){
    
 }
    
}

// 4) Create a subclass called "Dog" that extends Animal. 
// Add a constructor that uses super() and includes a breed property.
// Add a fetch() method that logs "The <breed> is fetching the ball!"

// 5) Create a class "Rectangle" with private properties #width and #height. 
// Add a method getArea() that returns the area (width * height).

// 6) Add getters and setters for #width and #height to allow controlled access and updates.

// 7) Create a base class "Vehicle" with make and model, and methods start() and stop().

// 8) Create a subclass "Truck" that extends Vehicle and adds a property cargoWeight. 
// Add a loadCargo(weight) method that increases cargoWeight and logs a message.
// Override the start() method to include a custom message.

// 9) Create a class "Account" with a private property #balance, a constructor for owner and balance, 
// and methods deposit(amount), withdraw(amount), and getBalance().

// 10) Create subclasses "SavingsAccount" (adds interestRate + addInterest method) 
// and "BusinessAccount" (adds overdraftLimit + overridden withdraw method).

// 11) Create instances of both account types and test their methods. 
// Demonstrate encapsulation by trying to access #balance directly (should error).

// 12) BONUS: Create a Shape class, then extend it with Circle and Square, 
// each with their own getArea() formula.

// 13) BONUS: Create a Bank class that holds multiple Account objects and calculates totalBalances().
