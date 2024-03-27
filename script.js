let Nedeland = parseInt(process.argv[2]);
let Duitsland = parseInt(process.argv[3]);
let Frankrijk = parseInt(process.argv[4]);


if (Nedeland < Duitsland && Nedeland < Frankrijk) {
    console.log("Nederland heeft minder inwoners dan Duitsland én Frankrijk:", true);
} else {
    console.log("Nederland heeft minder inwoners dan Duitsland én Frankrijk:", false);
}
if (Nedeland > Duitsland || Frankrijk > Duitsland) {
    console.log("Nederland óf Frankrijk heeft meer inwoners dan Duitsland:", true);
} else {
    console.log("Nederland óf Frankrijk heeft meer inwoners dan Duitsland:", false);
}
if (Nedeland <= Duitsland) {
    console.log("Nederland heeft niet meer inwoners dan Duitsland:", true);
} else {
    console.log("Nederland heeft niet meer inwoners dan Duitsland:", false);
}
