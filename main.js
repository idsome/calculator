$(document).ready(function(){
    $('.button').click(function(){
        $('.calc-display').val($('.calc-display').val() + $(this).val())
    });
    $('.result').click(function(){
        $('.calc-display').val(eval($('.calc-display').val()))
    });
    $('#erase').click(function(){
        $('.calc-display').val('');
    });
    

})