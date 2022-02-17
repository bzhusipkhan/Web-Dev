/*
let user = {
  name: "Джон",
  go: function() { alert(this.name) }
};
(user.go)() // Джон
let obj, method;
obj = {
  go: function() { alert(this); }
};
obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]
(method = obj.go)();    // (3) undefined
(obj.go || obj.stop)(); // (4) undefined
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};
function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    }
  };
};
let user = makeUser();
alert( user.ref().name ); // Джон
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}
ladder.up().up().down().up().down().showStep(); // 1
*/