function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
// Filter out from the list whatever matches the callback function. If there is no match, the calllback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
        item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
// MILLISECONDS
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurrentMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurrentMilliseconds);
});
// SECONDS
document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurrentSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurrentSeconds);
});
// FIRE
document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurrentMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
