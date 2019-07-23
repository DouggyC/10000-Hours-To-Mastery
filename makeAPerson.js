var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFullName = () => {
    return fullName;
  };

  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };

  this.getLastName = () => {
    return fullName.split(" ")[1];
  };

  this.setFirstName = first => {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = last => {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = name => {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
