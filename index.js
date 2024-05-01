//by using 'var'
// function timer() { }
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// timer();
//output will be : prints 6 in 5 times in each interval. Follow below code to get the expected output. it done by the use of closure


//the use of closure will help us to get the expected output even by using 'var'keyword.
function timer() {
    for (var i = 1; i <= 10; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
}
timer();

//by using'let'
// function timer() {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(function () {

//             console.log(i);

//         }, i * 1000);
//     }
// }
// timer();


