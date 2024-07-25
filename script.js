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
    zoom: 4,
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
        <img src="${property.icon}"/>
    </div>
    <div class="details">
        <div class="name">${property.name}</div>
        <div class="company">${property.company}</div>
    </div>
    `;
  return content;
}

const properties = [
  {
    "name": "Altanta",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 33.777443,
      "lng": -84.3891231
    }
  },
  {
    "name": "Amsteram",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 52.34063,
      "lng": 4.858677
    }
  },
  {
    "name": "Banglador",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 12.990026,
      "lng": 77.5910894
    }
  },
  {
    "name": "Barcelona",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 41.4105883,
      "lng": 2.1375186
    }
  },
  {
    "name": "Beijing",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 39.91882,
      "lng": 116.46004
    }
  },
  {
    "name": "Bilbao",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 43.2681758,
      "lng": -2.9385353
    }
  },
  {
    "name": "Brussels",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 50.8642464,
      "lng": 4.344038
    }
  },
  {
    "name": "Canberra",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": -35.3191738,
      "lng": 149.1363338
    }
  },
  {
    "name": "Chicago",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 41.8823083,
      "lng": -87.6403843
    }
  },
  {
    "name": "Detroit",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 42.3320022,
      "lng": -83.0477584
    }
  },
  {
    "name": "Dubai",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 25.03028418541971,
      "lng": 55.28720505997278
    }
  },
  {
    "name": "Dublin",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 53.339466,
      "lng": -6.239815
    }
  },
  {
    "name": "Essen",
    "company": "",
    "icon": "",
    "position": {
      "lat": 51.4895402,
      "lng": 7.0371017
    }
  },
  {
    "name": "Houston",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 29.7781976,
      "lng": -95.5601592
    }
  },
  {
    "name": "Johannesburg",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": -26.014901,
      "lng": 28.097924
    }
  },
  {
    "name": "Kroonenberg",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 50.1749639,
      "lng": 8.527966
    }
  },
  {
    "name": "London",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 51.511467,
      "lng": -0.0827261
    }
  },
  {
    "name": "Melbourn",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": -37.81545,
      "lng": 144.968765
    }
  },
  {
    "name": "Mexico",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 19.3870058,
      "lng": -99.2517992
    }
  },
  {
    "name": "Milan",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 45.4093225,
      "lng": 9.1512943
    }
  },
  {
    "name": "Munich",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 48.117221,
      "lng": 11.6020212
    }
  },
  {
    "name": "New York",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 40.7526701,
      "lng": -73.9977586
    }
  },
  {
    "name": "Paris",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 48.8267477,
      "lng": 2.2607252
    }
  },
  {
    "name": "Perth",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": -31.9562359,
      "lng": 115.8585468
    }
  },
  {
    "name": "Rome",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 41.8095576,
      "lng": 12.4268538
    }
  },
  {
    "name": "San Fancisco",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 37.7897854,
      "lng": -122.3969196
    }
  },
  {
    "name": "Sao Paolo",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": -23.632307,
      "lng": -46.7064112
    }
  },
  {
    "name": "Seattle",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 47.6062195,
      "lng": -122.3363936
    }
  },
  {
    "name": "Shenzhen",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 22.5454447,
      "lng": 114.0528838
    }
  },
  {
    "name": "Singapore",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 1.294378,
      "lng": 103.8531634
    }
  },
  {
    "name": "Sophia Antipolis",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 43.6216913,
      "lng": 7.0749722
    }
  },
  {
    "name": "Sydney",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": -33.8646631,
      "lng": 151.2028544
    }
  },
  {
    "name": "Tel Aviv",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 32.0698856,
      "lng": 34.7705165
    }
  },
  {
    "name": "Tokyo",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 35.6698187,
      "lng": 139.7426086
    }
  },
  {
    "name": "Toronto",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 43.645819,
      "lng": -79.3879232
    }
  },
  {
    "name": "Toulouse",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 43.6566,
      "lng": 1.3665929
    }
  },
  {
    "name": "Turin",
    "company": "Accenture/ Avanade",
    "icon": "ACN_AVA.png",
    "position": {
      "lat": 45.0319243,
      "lng": 7.6657502
    }
  },
  {
    "name": "Washington",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 38.9005404,
      "lng": -77.0385477
    }
  },
  {
    "name": "Zurich",
    "company": "Accenture",
    "icon": "ACN.svg",
    "position": {
      "lat": 47.368829,
      "lng": 8.54107
    }
  }
];

initMap();
