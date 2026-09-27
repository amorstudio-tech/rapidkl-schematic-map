const PoiPanel = (() => {
  let bottomSheet, sidebar, currentStationId = null;

  const EMOJI_LIST = ["📍", "🏛️", "🌳", "🛍️", "🍽️", "🎭", "🏟️", "🏬", "🏞️", "🎪", "🏫", "🕌", "✈️"];

  function initPanel() {
    if (bottomSheet) return;

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") closePanel();
    });

    document.addEventListener("station-deselected", function() {
      closePanel();
    });

    bottomSheet = createPanelElement("poi-panel-bottom-sheet");
    sidebar = createPanelElement("poi-panel-sidebar");

    document.body.appendChild(bottomSheet);
    document.body.appendChild(sidebar);

    document.addEventListener("station-selected", function(e) {
      openPanel(e.detail.stationId);
    });
  }

  function createPanelElement(className) {
    var panel = document.createElement("div");
    panel.className = "poi-panel " + className;

    if (className === "poi-panel-bottom-sheet") {
      var handle = document.createElement("span");
      handle.className = "poi-panel-handle";
      panel.appendChild(handle);
    }

    var header = document.createElement("div");
    header.className = "poi-panel-header";

    var title = document.createElement("h2");
    title.className = "poi-panel-title";
    header.appendChild(title);

    var closeBtn = document.createElement("button");
    closeBtn.className = "poi-panel-close";
    closeBtn.innerHTML = "✕";
    closeBtn.setAttribute("aria-label", "Close panel");
    closeBtn.addEventListener("click", closePanel);
    header.appendChild(closeBtn);

    panel.appendChild(header);

    var content = document.createElement("div");
    content.className = "poi-panel-content";
    panel.appendChild(content);

    return panel;
  }

  function openPanel(stationId) {
    var data = window.RAPIDKL_DATA;
    var station = data.stationById[stationId];
    if (!station) return;

    currentStationId = stationId;
    Map.updateSelection(stationId);

    var line = data.lines.find(function(l) { return l.id === station.line; });
    var stationPois = data.pois.filter(function(p) { return p.stationId === stationId; });

    [bottomSheet, sidebar].forEach(function(panel) {
      var titleEl = panel.querySelector(".poi-panel-title");
      if (titleEl) titleEl.textContent = station.name;

      var content = panel.querySelector(".poi-panel-content");
      content.innerHTML = "";

      if (stationPois.length === 0) {
        var empty = document.createElement("div");
        empty.className = "poi-panel-empty";
        empty.textContent = "No points of interest listed for this station.";
        content.appendChild(empty);
      } else {
        stationPois.forEach(function(poi, index) {
          var card = document.createElement("div");
          card.className = "poi-card";

          var icon = document.createElement("span");
          icon.className = "poi-card-icon";
          icon.textContent = EMOJI_LIST[index % EMOJI_LIST.length];
          card.appendChild(icon);

          var textWrap = document.createElement("div");
          textWrap.className = "poi-card-text";

          var name = document.createElement("div");
          name.className = "poi-card-name";
          name.textContent = poi.name;
          textWrap.appendChild(name);

          var desc = document.createElement("div");
          desc.className = "poi-card-desc";
          desc.textContent = poi.description;
          textWrap.appendChild(desc);

          card.appendChild(textWrap);
          content.appendChild(card);
        });
      }

      panel.classList.add("open");
    });
  }

  function closePanel() {
    if (!bottomSheet || !sidebar) return;
    bottomSheet.classList.remove("open");
    sidebar.classList.remove("open");
    if (currentStationId) {
      Map.clearSelection();
      currentStationId = null;
    }
  }

  return { initPanel: initPanel, openPanel: openPanel, closePanel: closePanel };
})();