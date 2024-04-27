var arr =[23,23,23,43,54,655,1,2,1,2,3,4,5,12,3,4,1,5,7,76];
var newarr =[];

for(var i=0; i<arr.length; i++)
{
    var index = newarr.indexOf(arr[i]);
    if(index ==  -1)
    {
        newarr.push(arr[i]);
    }
}
console.log(newarr);