/*

A closure is a combination of the function along with it's lexical environment(references to the surrounding state)

ADVANTAGES

1. Module Pattern
2. Function Currying
3. HOF like once, memoize
4. Data Encapsulation and Hiding

DISADVANTAGES

1. Overconsumption of memory
2. Memory leaks if not handled properly

*/

/* 
Since 'a' is not found in the local scope of y() it goes to it's 
lexical scope to find a where it is defined and found
*/

function x1(){
    var a = 7;
    function y1(){
        console.log("x1 -> ",a); // 7
    };
    y1();
}
x1();

/*
Even returned functions remember there lexical scope
Since we return y2 from x2 calling x2() and initialising it to z
We might think that z doesn't have access to 'a' since x2() is called and 'a'
might be destroyed but functions returned also remember their lexical scope
*/
function x2(){
    var a = 7;
    function y2(){
        console.log("x2 -> ",a);
    }

    return y2;
}
var z2 = x2();
z2();

/*
First x3 is executed and y3 is returned
Then when z3 is executed y3 gets executed and it remembers it's lexical scope
So the value of 'a' will be printed but in closure the reference to the
variable is remembered and not the value itself so by the time z3 is executed 
the value of 'a' changes to 100 so 100 is logged
*/

function x3(){
    var a = 7;
    function y3(){
        console.log("x3 -> ",a);
    }
    a = 100;
    return y3;
}

var z3 = x3();
z3(); // 100

/*
Here we can see that child functions can make a closure with higher order functions of any order
and remember reference to the variables in the lexical scope 
*/

function z4(){
    var b = 900;
    function x4(){
        var a = 7;
        function y4(){
            console.log("x4 -> ",a, b);
        }
        y4();
    }
    x4();
}
z4(); // 7 900

/*
Also the inner func remembers parameters passed onto from outer function
Inner function forms a closure with functional params
*/

function x5(b){
    let a = 5;
    function y5(){
        console.log("x5 -> ",a,b);
    }
    return y5;

}

let z5 = x5("hello");
z5();

/*
Declaring 'a' as var or let doesn't make a difference as 'a' won't be accessible
outside the function x6 but y6 will still form a closure with 'a'
*/

function x6(){
    let a = 123;
    function y6(){
        console.log("x6 -> ",a);
    }
    return y6;
}

x6()();

/*
Position of 'a' doesn't matter as long as it is below the
return statement
*/

function x7(){
    function y7(){
        console.log("x7 -> ",a);
    }
    let a = 100;
    return y7;
}

let z7 = x7();
z7();

/* 
Data encapsulation

We can encapsulate 'count' inside the counter function
c1 and c2 are two different counters, when we call outer function the 'count'
variable gets reinitialised but if we just call the inner function by assigning the outer function's
return value(which is a function) to a variable and calling the variable(equivalent to calling inner function)
the inner function remembers the reference to variable 'count' and hence we can modify it's value
*/
function counter(){
    var cnt = 0;
    function increment(){
        cnt++;
        console.log(cnt);
        return cnt;
    }
    return increment;
}
var c1 = counter();
console.log("Counter 1:",c1(),c1()); 

var c2 = counter();
console.log("Counter 2:",c2(),c2());

/* 
Closure with constructor
*/

function Counter(){
    let cnt = 0;
    this.increment = function(){
        cnt++;
        console.log(cnt);
        return cnt;
    }
    this.decrement = function(){
        cnt--;
        console.log(cnt);
        return cnt;
    }
}

var c3 = new Counter();
console.log("Counter constructor function: ",c3.increment(),c3.increment(),c3.decrement());