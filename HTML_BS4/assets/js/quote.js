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
    console.log(nbAppart)
}



// Calculation Commercial





// Calculation Corporate*/



// Calculation Hydrid*/
