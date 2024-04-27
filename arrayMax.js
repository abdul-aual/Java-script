var marks = [12,34,5,45,65,76,34,6,56,45,57,67,6,457,67,6,86,98];
var maxElement = marks[0];
for(var i=0; i<marks.length; i++)
{
    if(marks[i]>maxElement)
    {
        maxElement=marks[i]
    }

}
console.log("max number is = ", maxElement);