a= 10
b = 34
c = 9

function Oddoreven(num)
{
    if(num%2==0){
        return `${num} is Even`
    }
    else{
        return `${num} is Odd`
    }

}
console.log(Oddoreven(a))
console.log(Oddoreven(b))
console.log(Oddoreven(c))