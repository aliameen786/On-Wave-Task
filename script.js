$(document).ready(function () {
    $.ajax({
      url: "http://numbersapi.com/1/30/date?json",
      method: "GET",
      success: function (data) {
        $("#api-text").text(data.text);
      },
      error: function () {
        $("#api-text").text("Failed to load API data.");
      }
    });

    
  });




 