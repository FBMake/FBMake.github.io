function initialize() {
  
  
    var map = L.map('map').setView([49.369987, 1.094129], 8); // LIGNE 18

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { // LIGNE 20
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 8
    });

    map.addLayer(osmLayer);
    //map.locate({setView: true, maxZoom: 12});

    var VFico = L.icon({
      iconUrl: "src/homeToken.png",
      iconSize: [30, 30],
  });

    //search tool

    const searchControl = L.esri.Geocoding.geosearch().addTo(map);

    const results = L.layerGroup().addTo(map);

    let markers = new L.layerGroup();

    searchControl.on("results", function (data) {
      markers.clearLayers()
      let centerMarkerLatlng = centerMarker.getLatLng()
      let dataLatLng = data.latlng
      let zoneCheck = chekRadius(centerMarkerLatlng,dataLatLng);
      let popupdata = new L.Popup()
      popupdata.setLatLng(data.latlng)
      popupdata.setContent(data.text + "   :  " + zoneCheck)
      popupdata.addTo(markers)
      map.addLayer(markers)
    });
    
    function chekRadius(cencenterMarkerLatlnger,dataLatLng){
      let result = cencenterMarkerLatlnger.distanceTo(dataLatLng) / 1000
      console.log(result);
      if (result > 0 && result < 10) {
        return "Zone 1"
      }
      if (result >= 10 && result < 20) {
        return "Zone 2"
      }
      if (result >= 20 && result < 30) {
        return "Zone 3"
      }
      if (result >= 30 && result < 40) {
        return "Zone 4"
      }
      if (result >= 40 && result < 50) {
        return "Zone 5"
      }
      if (result >= 50 && result < 60) {
        return "Zone 6"
      }
      if (result >= 60 && result < 70) {
        return "Zone 7"
      }
      if (result >= 70 && result < 80) {
        return "Zone 8"
      }
      if (result >= 80 && result < 90) {
        return "Zone 9"
      }
      if (result >= 90 && result < 100) {
        return "Zone 10"
      }
      if (result >= 100 && result < 110) {
        return "Zone 11"
      }
      if (result >= 110 && result < 120) {
        return "Zone 12"
      }
      if (result >= 120 && result < 130) {
        return "Zone 13"
      }
      if (result >= 130 && result < 140) {
        return "Zone 14"
      }
      else{
        return "Hors Zone"
    }
    }

    
    //Bp localisation

    L.easyButton('<img src="src/localisation.png">', function(btn, map){
        map.locate({setView: true, maxZoom: 12});
    }).addTo(map);

    //VFHN Marker

    let centerMarker = L.marker([49.369900, 1.094159], { icon: VFico }).addTo(map).bindPopup('VF Rouen');

    var Z9 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 90000}).addTo(map).bindPopup('Zone 09'),

    Z8 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 80000}).addTo(map).bindPopup('Zone 08'),

    Z7 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 70000}).addTo(map).bindPopup('Zone 07'),

    Z6 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 60000}).addTo(map).bindPopup('Zone 06'),

    Z5 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 50000}).addTo(map).bindPopup('Zone 05'),

    Z4 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 40000}).addTo(map).bindPopup('Zone 04'),

    Z3 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 30000}).addTo(map).bindPopup('Zone 03'),

    Z2 = L.circle([49.369900, 1.094159], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 20000}).addTo(map).bindPopup('Zone 02'),

    Z1 = L.circle([49.369900, 1.094159], {color: "#f03",opacity: 0.2,fillOpacity: 0, radius: 10000}).addTo(map).bindPopup('Zone 01');

    function onLocationFound(e) {
        var radius = e.accuracy;
        markers.clearLayers()
        let centerMarkerLatlng = centerMarker.getLatLng()
        let dataLatLng = e.latlng
        let zoneCheck = chekRadius(centerMarkerLatlng,dataLatLng);
        let popupdata = new L.Popup()
        popupdata.setLatLng(e.latlng)
        popupdata.setContent("Vous êtes ici : " + zoneCheck)
        popupdata.addTo(markers)
        map.addLayer(markers)
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
        alert("Vous avez refusé la localisation !");    //e.message
    }

    map.on('locationerror', onLocationError);

    


}