function fact(num)
{
    var factorial = 1;
    for(var i=1; i<=num; i++)
    {
        factorial = factorial*i;
    }
    console.log(factorial);
}

fact(5);