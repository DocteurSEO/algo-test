

function GogoKodo(){
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("GogoKodo");
    else if (i % 3 == 0) console.log("Gogo");
    else if (i % 5 == 0) console.log("Kodo");
    else console.log(i);
}

}


GogoKodo()
 

module.exports = GogoKodo