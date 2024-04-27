function factorial(num)
{
    if(num==1)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}

var result1 = factorial(5);
console.log(result1);