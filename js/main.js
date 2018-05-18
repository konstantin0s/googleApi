function initMap() {
  var options = {
    zoom: 8,
    center: {lat:52.379189, lng:4.899431 }
  }

  //New Map
  var map = new google.maps.Map(document.getElementById('map'), options);
//Add marker
var marker = new google.maps.Marker({
  position: {lat:52.379189, lng:4.899431 },
  map:map
});
}
