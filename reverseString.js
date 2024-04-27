var speech = "Hello papa khan ki krteso ajkal";
var reverseSpeech = "";
var size = speech.length;


for (var i = size - 1; i >= 0; i--) {
    reverseSpeech += speech[i];
}

console.log(reverseSpeech);
