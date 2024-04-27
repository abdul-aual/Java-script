var speech = "hello   babu kmn acho. tumi ki vat khaiso? na khaile kheye nao babu.     kmn?";
var count=1;

for(var i=0; i<speech.length; i++)
{
    if(speech[i] == " " && speech[i-1] != " "  )
    {
        count++;
    }
}

console.log(count);