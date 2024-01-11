function add(a,b)
{
    c = a+b
    return c
}

 sub = (a,b)=>{
    c= a-b
    return c;
}
const mul =()=>{
    let a = prompt("Enter A")
    b = prompt("Enter B")
    c = parseInt(a)*parseInt(b)

    return c
}
addRes =add(1,2)
subRes =sub(5,4)
mulRes =mul()

console.log(`add 1+2 = ${addRes}
sub 5-4 = ${subRes}
multiple 2*3 = ${mulRes}`)

