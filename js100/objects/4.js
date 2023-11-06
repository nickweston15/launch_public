// Add a property to the below object jane, so that you log "Hej Bobby!"

let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus"
  },
  occupation: "engineer",
  greet: function (name) {
    console.log(`Hej, ${name}!`);
  },
};

jane.greet("Bobby");