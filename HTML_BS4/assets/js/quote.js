/*<!--*apparition et disparition de texte champs*************************************************************** */
	
$(document).ready(function () {
    $('.building_type').hide();
    
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});

// Calculs Residential
function residential() {
    console.log("test")
    nbAppart = document.getElementById("nbappart").value
    nbEtage = document.getElementById("nbetage").value
    nbSsol = document.getElementById("nbssol").value
    console.log(nbSsol)
    
}

function nombreElevatorRes(){
    var a = document.getElementById("nbappart").value || 0 ; 
    var b= document.getElementById("nbetage").value || 0 ;
    var c = document.getElementById("nbsol").value || 0 ;
    var nombreAscCommercial = Math.ceil( a/ (b*6) );

 var nombreColonne = Math.ceil(b/20);

 var nbascenseur = nombreAscCommercial * nombreColonne;
     if (a !=0 && b != 0 && c != 0 )
     {document.getElementById("nbelevator").value= nbascenseur;}
    
     else {
         document.getElementById("nbelevator").value = 0;
     } 

     return nbelevator

}


// Calculs Commercial
function commercial() {
    console.log("test")
    nbCommerce = document.getElementById("nbcommerce").value
    nbFloorc = document.getElementById("nbfloor").value
    nbSsolcc = document.getElementById("nbssol").value
    nbParkingc = document.getElementById("nbparking").value
    nbCagec = document.getElementById("nbcage").value
    console.log(nbParkingc)
}

function nombreAscCommercial(){
    var a =document.getElementById("nbcage").value || 0;
    


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


// Calculs Hydrid*/
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

// PRICE /

function Price() {

}
    var priceStandard = 7565.00 + "$";
	var priceInstStandard = 1.1;
	var pricePremium = 12345.00 + "$";
	var priceInstPremium = 1.13;
	var priceExcelium = 15400.00 + "$";
    var priceInstExcelium = 1.16;
