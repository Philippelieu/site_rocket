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

// Calculation Corporate*/
function corporate() {
    console.log("test")
    nbSeprate_rental = document.getElementById("nbseparte_rental").value
    nbFloorcorp = document.getElementById("nbfloor").value
    nbSsolcorp = document.getElementById("nbssol").value
    nbParkingcrop = document.getElementById("nbparking").value
    nbMaxfloorcorp = document.getElementById("maxfloor").value
    console.log(nbFloorcorp)
}


// Calculation Hydrid*/
function hybrid() {
    console.log("test")
    nbCommerceh = document.getElementById("nbcommerce").value
    nbFloorh = document.getElementById("nbfloor").value
    nbSsolh = document.getElementById("nbssol").value
    nbParkingh = document.getElementById("nbparking").value
    nbMaxfloorh = document.getElementById("nbmaxfloor").value
    nbnbHoursh = document.getElementById("nbHours").value
    console.log(nbSsol)
}