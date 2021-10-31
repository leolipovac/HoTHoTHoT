var requestURLJSON ="tempData.json";
var request = new XMLHttpRequest();

request.open('GET', requestURLJSON);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tempData = request.response;
    refreshTemp(tempData);

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    function refreshTemp(jsonTemp) {
        Newday = jsonTemp ['listTemp'][getRandomInt(5)]["day"];
        var newInsideTemp = jsonTemp['listTemp'][Newday]["insideTemp"];
        var newOutsideTemp = jsonTemp['listTemp'][Newday]["outsideTemp"];
        var newminTempInsideTemp = jsonTemp['listTemp'][Newday]["minTempInsideTemp"];
        var newmmaxTempInsideTemp = jsonTemp['listTemp'][Newday]["maxTempInsideTemp"];
        var newminTempOutSide = jsonTemp['listTemp'][Newday]["minTempOutSide"];
        var maxTempOutSide = jsonTemp['listTemp'][Newday]["maxTempOutSide"];

        let tempExterieurE = document.getElementById("h5minmaxV2");
        tempExterieurE.innerText= "MIN "+newminTempOutSide+" °C"+" MAX "+maxTempOutSide +" °C";

        let tempInterieurI = document.getElementById("h5minmax");
        tempInterieurI.innerText= "MIN "+newminTempInsideTemp+" °C"+" MAX "+newmmaxTempInsideTemp +" °C";

        let tempExterieur = document.getElementById("tempInt");
        tempExterieur.innerText= newInsideTemp+" °C";

        let tempInterieur = document.getElementById("tempExt");
        tempInterieur.innerText= newOutsideTemp+" °C";

        console.log(tempInt);
        console.log(tempExt);



        if (newOutsideTemp > 0 && newOutsideTemp < 35) {
            document.getElementById("pTempE").textContent = '  ';
            console.log(pTempE);

        }
        else if (newOutsideTemp < 0) {
            document.getElementById("pTempE").textContent = 'Banquise en vue !';
            console.log(pTempE);
        }
        else {
            document.getElementById("pTempE").textContent = "Hot Hot Hot !";
            console.log(pTempE);
    
        }
        
        if (newInsideTemp > 22 && newInsideTemp < 50) {
            document.getElementById("pTemp").textContent = ' Baissez le chauffage ! ';
            console.log(pTempI);

        }
        else if (newInsideTemp > 12 && newInsideTemp < 22) {
            document.getElementById("pTemp").textContent = ' ';
            console.log(pTempI);
        }
        else if (newInsideTemp < 12) {
            document.getElementById("pTemp").textContent = 'Montez le chauffage ou mettez un pull !';
            console.log(pTempI);
        }
        else if (newInsideTemp < 0) {
            document.getElementById("pTemp").textContent = 'canalisations gelées, appelez SOS plombier - et mettez un bonnet !';
            console.log(pTempI);
        }
        else {
            document.getElementById("pTemp").textContent = "Appelez les pompiers ou arrêtez votre barbecue !";
            console.log(pTempI);
    
        }
        
    }

