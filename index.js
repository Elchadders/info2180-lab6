<!DOCTYPE javascript>
 
$(document).ready(function(){
  var query = $("#query").val();
  var link = "https://info2180-lab6-gdavy.c9users.io/request.php?q="+query;
 
  $.ajax(link, {
    method: "GET",
  }).done(function(res){
    alert(res);
  }).fail(function(error){
    alert(error);
  });
 
});


   
