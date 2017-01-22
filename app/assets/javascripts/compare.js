$(document).ready (function(){
    var priority;

    $( "#comparison_form" ).on('submit', function(event) {
      var points = { address1: 0, address2: 0 };
      event.preventDefault();

      address1 = $( "#_map_data_address_1 option:selected" ).val()
      address2 = $( "#_map_data_address_2 option:selected" ).val()
      data1 = $( "#_map_data_address_1 option:selected" ).data()
      data2 = $( "#_map_data_address_2 option:selected" ).data()

      var data = { address1: data1, address2: data2 };
      // Replace Contents
      $('#selection_1 .price').text(address1)
      $('#selection_1 .coffee').text('Nearest Coffee Shop  ' + data1.coffee)
      $('#selection_1 .work').text('Work Distance:  ' + data1.work)
      $('#selection_1 .dog').text('Nearby Dog Park:  ' + data1.dogpark)

      $('#selection_2 .price').text(address2)
      $('#selection_2 .coffee').text('Nearest Coffee Shop:  ' + data2.coffee)
      $('#selection_2 .work').text('Work Distance:  ' + data2.work)
      $('#selection_2 .dog').text('Nearby Dog Park:  ' + data2.dogpark)

      var pointValues = { '0': 1, '1': 5, '2':10 };

      if (priority) {
        for (var i=0; i<priority.length; i++) {
          switch (priority[i]) {
            case 'Nearest Coffee Shop':
            for (address in data) {
              if (data[address].coffee == 'Starbucks') {
                if (i == 0) {
                  points[address] += 10;
                } else if (i == 1) {
                  points[address] += 5;
                } else {
                  points[address] += 1;
                }
              }
            }
            break;
            case 'Work Distance':
            var distance = [];
            for (address in data) {
              if (data[address].work.includes('km')) {
                distance.push(parseFloat(data[address].work)*1000);
              } else {
                distance.push(parseFloat(data[address].work))
              }
            }
            if (distance[0] !== distance[1]) {
              if (i == 0) {
                if (distance[0] < distance[1]) {
                  points.address1 += 10;
                } else {
                  points.address2 += 10;
                }
              } else if (i == 1) {
                if (distance[0] < distance[1]) {
                  points.address1 += 5;
                } else {
                  points.address2 += 5;
                }
              } else {
                if (distance[0] < distance[1]) {
                  points.address1 += 1;
                } else {
                  points.address2 += 1;
                }
              }
            }
              break;
                case 'Nearby Dog Park':
                for (address in data) {
                  if (data[address].dogpark == 'yes') {
                    if (i == 0) {
                      points[address] += 10;
                    } else if (i == 1) {
                      points[address] += 5;
                    } else {
                      points[address] += 1;
                    }
                  }
                }
                break;
              }
            }
      }

      console.log('points', points);
      if (points.address1 > points.address2) {
        $('#selection_1').append('<h3>Winner!</h3>')
        $('#selection_2').append('<h3>&nbsp;</h3>')
      } else if (points.address1 === points.address2){
          $('#selection_1').append('<h3>Tie!</h3>')
          $('#selection_2').append('<h3>Tie!</h3>')
      }
       else {
        $('#selection_2').append('<h3>Winner!</h3>')
        $('#selection_1').append('<h3>&nbsp;</h3>')
      }
      return false
    });

// PRIORITIZE
    $( function() {
      $( "#sortable" ).sortable();
      $( "#sortable" ).disableSelection();

      $('#prioritize_button').on('click', function() {
        items = $('#sortable li').map(function(index, item) {
          return $(item).text()
        })
        priority = items;
        console.log(priority);
      })
    } );
  })

  //

  function myFunction() {
      alert("Great! Now select which addresses to compare.");
  }
