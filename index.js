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

const a = new A("foo", "bar");
a.print();

