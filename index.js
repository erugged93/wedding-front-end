var $ = require('jquery');

function getGuests() {
  $.getJSON('http:localhost:3000/guests?callback=?', function(data, err){
    if(err)
      alert(err);
    $.each(data, function(){
      $('#answer-well tbody').append('<tr><td>'+this.name+'</td><td>'+
          this.notDrinking+'</td><td>'+this.family+'</td><td>'+this.bridal_party+
          '</td><td>'+this.plusOne+'</td></tr>');
    });
  });
};

function addGuest(name, family, plusOne, drinking) {
  $.ajax({
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      url: 'http:localhost:3000/guests?name='+name+'&family='+
      family+'&notDrinking='+drinking+'&plusOne='+plusOne+'?callback=?',
      success: function (error,data) {
        console.log(error);
        console.log(data);
      }

    });
};

$(document).ready(function() {
    console.log( "ready!" );


      // $.post('http://db63c525.ngrok.io/guests?name=John Doe?family=true?bridal_party=false?callback=?',null,function(data){
      //   if(err)
      //     alert(err);
      //   console.log(data);
      // });


      // $.getJSON('http:localhost:3000/guests?callback=?', function(data, err){
      //   if(err)
      //     alert(err);
      //   // alert("hello");
      //   // console.log(data);
      //   $.each(data, function(){
      //     // console.log(this.name);
      //
      //     $('#answer-well').append("<li class='list-group-item'>"+this.name+"</li>");
      //     // $('#eric').text(this.name);
      //   });
      // });

});

$('#input').click(function() {
  var name = $('#usr').val();
  var family = $("#family").is(':checked', true);

  var drinking = $('#drinking').is(':checked', false);

  var plusOne = $('#plusOne').is(':checked', true);

    addGuest(name, family, plusOne, drinking);
    getGuests();
})
