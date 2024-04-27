function inchToFeet(inch)
{
    var feet = inch/12;
    return feet;
}

var Nanafeet = inchToFeet(124);
console.log(Nanafeet);
var Nanifeet = inchToFeet(343);
console.log(Nanifeet);
var allfeet = [127,465,767];
var allfeet1=inchToFeet(allfeet[0]);
console.log(allfeet1);