$(document).ready(function() {
    $(".button1").click(function() {
    
         var searchTerm = $("#searchTerm").val();
         var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
    
        $.ajax({
          type: "GET",
          url: wikiURL,
          async: false,
          dataType: "json",
          success: function(data) {
            console.log(data);
            $("#searchTerm").val("");
            $("#output").html("");
            for (i = 0; i < data[1].length; i ++) {
              $("#output").append('<a href='+data[3][i]+'>'+'<div class="results"><h2>'+data[1][i]+'</h2>'+'<p>'+data[2][i]+'</p></div></a>');
            }
          },
          error: function(errorMessage) {
            alert("Error");
          }
        });
      });  
    });
    // for enter key code==13
    $(document).keypress(function (e) {
        if (e.which == 13) {
           $(".button1").click();
              
        }
    });
    