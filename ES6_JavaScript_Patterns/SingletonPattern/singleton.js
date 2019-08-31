// Singleton object is an immediate annoymous function, that can only return one instance of a function at a time. Repeated call to the constructor will just return the same instance. like module has private reference

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();


console.log(instanceA); // { name: 'Brad' }

console.log(instanceA === instanceB); // true
