const Map = (() => {
  var leafletMap, container, selectedStationId = null;
  var ringElements = {};

  function initMap(containerElement) {
    container = containerElement;

    leafletMap = L.map(containerElement, {
      center: [3.14, 101.69],
      zoom: 12,
      zoomControl: true,
      attributionControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    var data = window.RAPIDKL_DATA;

    // Lines
    data.lines.forEach(function(line) {
      var latlngs = line.stationIds
        .map(function(id) { return data.stationById[id]; })
        .filter(Boolean)
        .map(function(s) { return [s.lat, s.lng]; });

      if (latlngs.length < 2) return;

      L.polyline(latlngs, {
        color: line.color,
        weight: 4,
        opacity: 0.8,
        smoothFactor: 1,
        interactive: false
      }).addTo(leafletMap);
    });

    // Stations
    data.stations.forEach(function(station) {
      var line = data.lines.find(function(l) { return l.id === station.line; });
      var color = line ? line.color : "#999";

      // Selection ring
      var ring = L.circleMarker([station.lat, station.lng], {
        radius: 12,
        color: "transparent",
        fillColor: "transparent",
        fillOpacity: 0,
        weight: 3,
        interactive: false
      }).addTo(leafletMap);
      ringElements[station.id] = ring;

      // Station dot
      L.circleMarker([station.lat, station.lng], {
        radius: 7,
        color: "#fff",
        fillColor: color,
        fillOpacity: 1,
        weight: 2,
        interactive: false
      }).addTo(leafletMap);

      // Use a regular marker with a transparent colored icon
      var lineName = line ? line.name : "RapidKL";
      var icon = L.divIcon({
        html: '<div style="width:44px;height:44px;border-radius:50%;background:rgba(0,120,255,0.01);cursor:pointer;" title="' + station.name + '" aria-label="' + station.name + ' station, ' + lineName + ' line" role="button" tabindex="0"></div>',
        iconSize: [44, 44],
        iconAnchor: [22, 22],
        className: ''
      });

      var m = L.marker([station.lat, station.lng], {
        icon: icon,
        interactive: true,
        zIndexOffset: 10000
      }).addTo(leafletMap);

      m.bindTooltip(station.name, { direction: "top", offset: [0, -18] });

      m.on("click", function(e) {
        L.DomEvent.stopPropagation(e);
        onStationClick(station.id);
      });
    });

    // Deselect on map click
    leafletMap.on("click", function() {
      clearSelection();
      container.dispatchEvent(new CustomEvent("station-deselected", { bubbles: true }));
    });
  }

  function onStationClick(stationId) {
    updateSelection(stationId);
    container.dispatchEvent(new CustomEvent("station-selected", { detail: { stationId: stationId }, bubbles: true }));
  }

  function updateSelection(stationId) {
    if (selectedStationId && ringElements[selectedStationId]) {
      ringElements[selectedStationId].setStyle({ color: "transparent" });
    }
    selectedStationId = stationId;
    if (stationId && ringElements[stationId]) {
      ringElements[stationId].setStyle({ color: "#007AFF" });
    }
  }

  function clearSelection() {
    if (selectedStationId && ringElements[selectedStationId]) {
      ringElements[selectedStationId].setStyle({ color: "transparent" });
    }
    selectedStationId = null;
  }

  return { initMap: initMap, updateSelection: updateSelection, clearSelection: clearSelection };
})();