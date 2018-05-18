function initMap() {
  var options = {
    zoom: 8,
    center: {lat:52.379189, lng:4.899431 }
  }

/*
  //New Map
  var map = new google.maps.Map(document.getElementById('map'), options);
//Add marker
var marker = new google.maps.Marker({
  position: {lat:52.379189, lng:4.899431 },
  map:map,
   icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
});

var infoWindow = new google.maps.infoWindow({
  content:'<h1>Amsterdam</h1>'
});
marker.addListener('click', function(){
  infoWindow.open(map, marker);
});

*/
// New map
     var map = new google.maps.Map(document.getElementById('map'), options);

     // Listen for click on map
     google.maps.event.addListener(map, 'click', function(event){
       // Add marker
       addMarker({coords:event.latLng});
     });

     var markers = [
       {
         coords:{lat:52.379189, lng:4.899431 },
         iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
         content:'<h1>Amsterdam</h1>'
       }
     ];

     // Loop through markers
       for(var i = 0;i < markers.length;i++){
         // Add marker
         addMarker(markers[i]);
       }

       // Add Marker Function
       function addMarker(props){
         var marker = new google.maps.Marker({
           position:props.coords,
           map:map,
           //icon:props.iconImage
         });

         // Check for customicon
         if(props.iconImage){
           // Set icon image
           marker.setIcon(props.iconImage);
         }

         // Check content
         if(props.content){
           var infoWindow = new google.maps.InfoWindow({
             content:props.content
           });

           marker.addListener('click', function(){
             infoWindow.open(map, marker);
           });
         }
       }
     }
