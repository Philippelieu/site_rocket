/*<!--*apparition et disparition de texte champs*************************************************************** */
	
$(document).ready(function () {
    $('.building_type').hide();
    
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});

// Calculation Residential
function residential() {
    console.log("test")
    nbAppart = document.getElementById("nbappart").value
    nbEtage = document.getElementById("nbetage").value
    nbSsol = document.getElementById("nbssol").value
    console.log(nbSsol)
    
}


// Calculation Commercial
function commercial() {
    console.log("test")
    nbCommerce = document.getElementById("nbcommerce").value
    nbFloorc = document.getElementById("nbfloor").value
    nbSsolcc = document.getElementById("nbssol").value
    nbParkingc = document.getElementById("nbparking").value
    nbCagec = document.getElementById("nbcage").value
    console.log(nbParkingc)
}

// Calculation Corporate
function corporate() {
    console.log("test")
    nbSeprate_rental = document.getElementById("nbseparate_rental").value
    nbFloorcorp = document.getElementById("nbfloor").value
    nbSsolcorp = document.getElementById("nbssol").value
    nbParkingcrop = document.getElementById("nbparking").value
    nbMaxfloorcorp = document.getElementById("maxfloor").value
    console.log(nbSeprate_rental)
}


// Calculation Hydrid*/
function hybrid() {
    console.log("test")
    nbCommerce = document.getElementById("nbcommerce").value
    nbFloorh = document.getElementById("nbfloor").value
    nbSsolh = document.getElementById("nbssol").value
    nbParkingh = document.getElementById("nbparking").value
    nbMaxfloor = document.getElementById("nbmaxfloor").value
    nbHoursh = document.getElementById("nbhours").value
    console.log(nbHoursh)
}

// radio bonton recuparation/

var valeur;
console.log("test")
if (document.getElementById("standard").checked) {
 valeur = document.getElementById("standard").value;
}
var valeur;
if (document.getElementById("premium").checked) {
 valeur = document.getElementById("premium").value;
}
var valeur;
if (document.getElementById("excelium").checked) {
 valeur = document.getElementById("excelium").value;
}


    var priceStandard = 7565.00 + "$";
	var priceInstStandard = 1.1;
	var pricePremium = 12345.00 + "$";
	var priceInstPremium = 1.13;
	var priceExcelium = 15400.00 + "$";
	var priceInstExcelium = 1.16;