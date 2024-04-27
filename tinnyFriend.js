var name = ['kalam', 'alm', 'jobbar', 'chagol'];


var tinny =name[0].length;

for(var i=0; i<name.length; i++)
{
    var temp=name[i].length;

    if(temp<tinny)
    {
        tinny=temp;
    }
}

for(var i=0; i<name.length; i++)
{
    if(tinny == name[i].length)
    {
        console.log(name[i]);
    }
}