class Movie {
    constructor(name, std, age) {
      this.title = name;
      this.studio = std;
      this.rating = age || "PG";
    }
  }
  
  // a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
  
  const Mv1 = new Movie("Pushpa", "Bhagi", "ALL");
  console.log(Mv1);
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  
  const Mv2 = new Movie("83", "Loskdown");
  console.log(Mv2);
  
  const Mv3 = new Movie("Atrangi re", "Sairat");
  console.log(Mv3);
  
  let arr = [Mv1, Mv2, Mv3];
  
  // Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  
  let getPG = (arr1) => {
    let s = arr1.filter((e) => e.rating == "PG").map((mv) => mv.title);
    console.log("Here are the movies with rating PG " + s);
  };
  
  getPG(arr);
  
  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
  //  the studio “Eon Productions”, and the rating “PG­13”
  
  const Mv4 = new Movie("Royale ", "Eon Productions", "PG13");
  console.log(Mv4);
  
  // ****************************  //
  
  class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
      return {
        getRadius: radius,
        setRadius: function () {
          console.log(`${this.getRadius}`);
        },
        getColor: color,
        setColor: function () {
          console.log(`${this.getColor}`);
        },
        getArea: function () {
          console.log(
            "Are of circle is " +
              (Math.PI * Math.pow(this.getRadius, 2)).toFixed(2)
          );
        },
  
        getCircumference: function () {
          console.log(
            "This is circumference of circle " +
              (2 * Math.PI * this.getRadius).toFixed(2)
          );
        },
      };
    }
  }
  
  let C1 = new Circle(4, "red");
  C1.setRadius();
  C1.setColor();
  C1.getArea();
  C1.getCircumference();
  
  // **************************************//
  
  // Write a “person” class to hold all the details.
  
  class Person {
    constructor(firstName, lastName, work, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.work = work;
      this.age = age;
    }
  }
  
  let P1 = new Person("nagarajan", "sir", "Engineer", "34");
  console.log(P1);
  
  // write a class to calculate uber price.
  
  class UberPrice {
    constructor(miles, time, nightCharge) {
      this.miles = miles;
      this.time = time;
      this.nightCharge = nightCharge;
      return {
        getMiles: miles,
        getInTime: time,
        getNightCharge: nightCharge,
        setCost: function () {
          let cost = this.getMiles * this.getInTime;
  
          if (this.getInTime > 20 || this.getInTime < 6) {
            cost += this.getNightCharge;
          }
          console.log(cost);
        },
      };
    }
  }
  
  let car1 = new UberPrice(2, 3, 20);
  car1.setCost();
