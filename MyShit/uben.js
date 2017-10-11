//GoogleMaps API
function initMap() {
        var uluru = {lat: 51.208328, lng: 6.821417};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
//Üben Auswahl ein und ausblenden
var option = document.querySelectorAll("option");
var fieldset = document.querySelectorAll("fieldset");

option[0].addEventListener("click",function(){
  fieldset[0].classList.add("ausblenden");
  fieldset[1].classList.add("ausblenden");
});
option[1].addEventListener("click",function(){
  fieldset[0].classList.remove("ausblenden");
});
option[2].addEventListener("click",function(){
  fieldset[1].classList.add("ausblenden");
});
option[4].addEventListener("click",function(){
  fieldset[1].classList.remove("ausblenden");
});
//Platzhalter für Game
option[10].addEventListener("click",function(){
  fieldset[1].classList.remove("ausblenden");
});
