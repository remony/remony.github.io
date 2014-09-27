$(document).ready(function() {

   $("input").change(function(){
      $('#output').text($(this).val());
    });

});
