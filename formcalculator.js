

      

$('input').keyup(function(){ // run anytime the value changes


  var firstValue = parseFloat($('#first').val()); // get value of field
  var secondValue = parseFloat($('#second').val()); // convert it to a float
  var thirdValue = parseFloat($('#third').val());
  var fourthValue = parseFloat($('#fourth').val());

  $('#total_expenses').html(firstValue + secondValue + thirdValue + fourthValue); // add them and output it
});


$('input').keyup(function(){ // run anytime the value changes
  var firstValue = parseFloat($('#first').val()); // get value of field
  var secondValue = parseFloat($('#second').val()); // convert it to a float
  var thirdValue = parseFloat($('#third').val());
  var fourthValue = parseFloat($('#fourth').val());
  document.getElementById('#total_expenses').value(firstValue + secondValue + thirdValue + fourthValue);
// add them and output it
});