class A {
    constructor( foo, bar, lorem) {
        this.foo = foo;
        this.bar = bar;
        this.lorem = lorem;
    }

    print(){
        console.log("foo: ", this.foo);
        console.log("bar: ", this.bar);
        console.log("lorem: ", this.lorem);
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

const a = new A("foo", "bar", "lorem");

const c = new C();

a.print();
c.print();

const b = new B();

a.print();
b.print();