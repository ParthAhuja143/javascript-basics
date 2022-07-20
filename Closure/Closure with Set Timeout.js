/*
How set timout works is that whenever you pass
pass a callback to a setTimout, it attatched a timer
to the callback and resumes execution of code, and when timout 
expires the callback is executed
*/

/* 
First "LOC 13" will be printed and
when timeout expires the value of 'i' 
will be printed , we can see that it
still forms a closure and remembers the value of 'i'
which is in it's lexical scope

OUTPUT

LOC 13
1

*/

function x1(){
    var i = 1;
    setTimeout(() => {
        console.log(i);
    }, 1000)
    console.log("LOC 13")
}

x1();

/* 
Many will think that the output will be 1 2 3 4 5 after 1sec
but the output will be 6 6 6 6 6 because we have seen that javascript
attatches a timer to th callback and continues execution of code
so the for loop is executed until termination and value of 'i' becomes
6 and since in closure the function remembers the reference to the variable
and not the value so 'i' will change to 6 before timer gets finished

Also we have used 'var' which has function scope so the variable 'i' is the same throughout the loop

OUTPUT

6
6
6
6
6

*/

function x2(){
    for(var i = 1; i <= 5 ; i++){
        setTimeout(() => {
            console.log('x2 -> ', i);
        }, i*1000)
    }
}

setTimeout(() => {x2()}, 1000);

/* 
A way to fix this is by using 'let' instead of 'var'
which has block scope instead of function scope, that
means that the variable 'i' is available only in the block of it's declaration
thus every loop will create a different 'i' and each callback will remember that reference
to 'i' which doesn't change as let has block scope and 'i' will be created again and again
and attatched to the callback

OUTPUT

1
2
3
4
5

*/

function x3(){
    for(let i = 1; i <= 5 ; i++){
        setTimeout(() => {
            console.log('x3 -> ',i);
        }, i*1000)
    }
}

setTimeout(() => {x3()}, 6000);

/*
Another solution is to use closures
Since we know that functions form closure with it's lexical
environment, we can wrap the setTimeout in an outer function and 
supply it the current value of i in the loop and setTimout will form a 
closure with the parameter in the outer function

OUTPUT

1
2
3
4
5

*/



function x4(){
    for(var i = 1 ; i <= 5 ; i++){
        function closure(x){
            setTimeout(function(){
                console.log('x4 ->',x);
            }, x*1000)
        }
        closure(i);
    }
}
setTimeout(() => {x4()}, 10000);
