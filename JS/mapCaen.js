function initialize() {
  
  
    var map = L.map('map').setView([49.158764, -0.322436], 8); // LIGNE 18

    //49.158764076405774, -0.32243687115737435

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

    let centerMarker = L.marker([49.158764, -0.322436], { icon: VFico }).addTo(map).bindPopup('VF Caen');

    var 

    Z14 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 140000}).addTo(map).bindPopup('Zone 14'),

    Z13 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 130000}).addTo(map).bindPopup('Zone 13'),

    Z12 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 120000}).addTo(map).bindPopup('Zone 12'),

    Z11 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 110000}).addTo(map).bindPopup('Zone 11'),

    Z10 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 100000}).addTo(map).bindPopup('Zone 10'),

    Z9 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 90000}).addTo(map).bindPopup('Zone 09'),

    Z8 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 80000}).addTo(map).bindPopup('Zone 08'),

    Z7 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 70000}).addTo(map).bindPopup('Zone 07'),

    Z6 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 60000}).addTo(map).bindPopup('Zone 06'),

    Z5 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 50000}).addTo(map).bindPopup('Zone 05'),

    Z4 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 40000}).addTo(map).bindPopup('Zone 04'),

    Z3 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 30000}).addTo(map).bindPopup('Zone 03'),

    Z2 = L.circle([49.158764, -0.322436], {color: "blue",opacity: 0.2,fillOpacity: 0, radius: 20000}).addTo(map).bindPopup('Zone 02'),

    Z1 = L.circle([49.158764, -0.322436], {color: "#f03",opacity: 0.2,fillOpacity: 0, radius: 10000}).addTo(map).bindPopup('Zone 01');

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