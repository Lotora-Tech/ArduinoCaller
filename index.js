const date = new Date().toISOString();
const hour = "" + (1 + parseInt(date.substr(11,2)));
const writeString = date.substr(0,4) + date.substr(5,2) + date.substr(8,2) + hour + date.substr(14,2) + date.substr(17,2) + "00";

for (var i = 0; i < writeString.length; i++) {
    console.log(writeString[i]);
}