$(document).ready(function () {
    $('.building_type').hide();
    
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});
                 


    /*function 
    if a est selectionné, nous afficherons les var suivante( nbappart,nbetage)
    */

    /* arrondir
    function roundDecimal(nombre, precision){
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
    + 1 
*/


