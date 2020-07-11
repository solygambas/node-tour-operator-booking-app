export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic29seWdhbWJhcyIsImEiOiJja2NnOXRnYW0wb2U3MnFvOHZqYmcwZDl4In0.y0xcsBLMv1xzMR79no9geg";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/solygambas/ckcga0sf10x0q1io5nz7qkhbg",
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";
    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup with info
    new mapboxgl.Popup({
      offset: 30, // to avoid overlapping with pin points
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });
  // Fit the box
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
