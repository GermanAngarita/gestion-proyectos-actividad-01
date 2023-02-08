class A {
    constructor( foo, bar) {
        this.foo = foo;
        this.bar = bar
    }

    print(){
        console.log("foo: ", this.foo);
        console.log("bar: ", this.bar);
    }
}

class B {
    constructor(){}
    print(){
        console.log("Clase B")
    }
}

const a = new A("foo", "bar");
const b = new B();

a.print();
b.print();
