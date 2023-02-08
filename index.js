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


class C {
    constructor(){}

    print(){
        console.log("Clase C")
				
    }
}

class B {
    constructor(){}
    print(){
        console.log("Clase B")

    }
}

const a = new A("foo", "bar");

const c = new C();

a.print();
c.print();

const b = new B();

a.print();
b.print();