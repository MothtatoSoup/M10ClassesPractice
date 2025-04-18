const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    // Problem 1:
    // Create a class called Calculator with two methods:
    class Calculator{
        constructor(x,y){
          this.x = x
          this.y = y
          }
      add(){ //  - add(x, y): returns the sum of x and y
        return `Addition: ${this.x + this.y}`
      }
      subtract(){ //  - subtract(x, y): returns the result of x minus y
        return `Subtraction: ${this.x - this.y}`
      }
    }
    // Then create an instance and call both methods.
    let maths = new Calculator(8,10)
    log(maths.add())
    log(maths.subtract())
  },
  function problem2() {
    // Problem 2:
    // Create a class called Person with two methods:
    class Person{
      setName(name){     //  - setName(name): sets a property called name
        this.name = name
      }
      getName(){     //  - getName(): returns the name
        return `Name: ${this.name}`
      }
    }
    // Then create an instance, set the name to your name, and log it using getName().
    let me = new Person()
    me.setName("Maddy")
    log(me.getName())
  },
  function problem3() {
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    class Bird{
      fly(){
        return "Flying"
      }
    }
    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    class Penguin extends Bird{
      fly(){
        return "Penguins can't fly"
      }
    }
    // Then create one Bird and one Penguin, and call their fly() methods.
    let birb = new Bird
    let peso = new Penguin
    log(birb.fly())
    log(peso.fly())
    // Write your class and code here
  },
  function problem4() {
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    class Shape{
      describe(){
        return "I'm a shape"
      }
    }
    // Create two subclasses: Circle and Square
    class Circle extends Shape{
      describe(){
        return "I'm a circle"    // - Circle's describe() method logs "I'm a circle"
      }
    }
    class Square extends Shape{
      describe(){
        return "I'm a square"// - Square's describe() method logs "I'm a square"
      }
    }
    // Then create instances of Circle and Square and call their describe() methods.
    let circe = new Circle
    let sponge = new Square
    log(circe.describe())
    log(sponge.describe())

  },
  function problem5() {
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    class Employee{
      work(){
        return "Working 9 to 5, what a way to make a livin'"
      }
    }
    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    class Manager extends Employee{
      hireEmployee(){
        return "Employee Hired"
      }
    }
    // Then create an instance of Manager, and call both methods.
    let bob = new Manager
    log(bob.work())
    log(bob.hireEmployee())
    // Write your class and code here
  }
];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
