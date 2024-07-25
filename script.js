/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 48.82691619846578, lng: 2.2605479203979626 };
  const map = new Map(document.getElementById("map"), {
    zoom: 14,
    center,
    // mapId: "4504f8b37365c3d0",
    mapId: "DEMO_MAP_ID",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  // content.innerHTML = `
  //   <div class="icon">
  //       <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}" style="color: #${property.color}"></i>
  //       <span class="fa-sr-only">${property.type}</span>
  //   </div>
  //   <div class="details">
  //       <div class="name">${property.name}</div>
  //       <div class="company">${property.company}</div>
  //       <div class="address">${property.address}</div>
  //   </div>
  //   `;
    content.innerHTML = `
    <div class="icon">
        <img src="marker-flat-bicolor.png"/>
    </div>
    <div class="details">
        <div class="name">${property.name}</div>
        <div class="company">${property.company}</div>
        <div class="address">${property.address}</div>
    </div>
    `;
  return content;
}

const properties = [
  {
    address: "3 Esp. du Foncet, 92130 Issy-les-Moulineaux",
    description: "Avanade Paris",
    name: "Paris",
    company: "Accenture / Avanade",
    color: "FF5800",
    type: "building",
    position: {
      lat: 48.82691619846578,
      lng: 2.2605479203979626,
    },
  },
  {
    address: "3 Esp. du Foncet, 92130 Issy-les-Moulineaux",
    description: "Accenture Paris",
    name: "Paris",
    company: "Accenture",
    color: "A100FF",
    type: "building",
    position: {
      lat: 48.825400,
      lng: 2.263385,
    },
  }
];

initMap();
