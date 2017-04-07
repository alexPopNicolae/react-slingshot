//scrie un program care sa calculeze numerele prime mai mici decat o suta

function isPrime(value) {
    //construim memoria functiei ca sa stocam valorile pe care le calculam
    if(!isPrime.answers) { 
        isPrime.answers = {};
    }

    //verificam in memoria functiei daca avem deja valoarea
    //respectiva si daca o avem atunci o returnam
    if(isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
    }

     //presupunem ca prim este fals pentru orice valoare
     //care este diferita de 1 
    var prime = value !== 1;

    for(var i=2; i<value; i++) {
        if(value % i == 0) {
            prime=false;
            break;
        }
    }

    return isPrime.answers[value] = prime; //stocam numarul prim
}

//acum vom face o functie simpla de prime


function prime(value) {
   var prime = value !== 1;

    for(var i=2;i<value;i++) {
        if(value % i == 0 ) {
           prime=false;
           break;     
        }
    }
    return prime;
}

//calculam performanta si vedem ce e de facut
var numbers=[2,11,22,22,22,22,22,222,22,222,22,22,11,11,11,11,11,3,4,5,6,7,8,9,19,11,12,13,15,16,17];
console.time('simple prime');
    for(var i=0;i<numbers.length;i++) {
        console.log(prime(numbers[i]));
    }

console.timeEnd('simple prime');

console.time('memo prime');
    for(var i=0;i<numbers.length;i++) {
        console.log(isPrime(numbers[i]));
    }

console.timeEnd('memo prime');