$(document).ready (function(){
  $( "#sel1" ).change(function(event, data) {
    var compare = $('#sel1').val();
    console.log(compare);
  });
}
);

$(document).ready (function(){
  $( "#sel2" ).change(function(event, data) {
    var compare = $('#sel2').val();
    console.log(compare);
  });
}
);

$(document).ready (function(){
    $( "#comparison_form" ).on('submit', function(event) {
      event.preventDefault();
      address1 = $( "#_map_data_address_1 option:selected" ).val()
      address2 = $( "#_map_data_address_2 option:selected" ).val()

      $('#selection_1 .price').text(address1)
      $('#selection_2 .price').text(address2)

      // $("#comparison_form").unbind('submit').submit()
      // $("form#comparison_form").unbind("submit");
      return false
    });
  }
);
