{
mviewer.customLayers.directionnel = {};
mviewer.customLayers.directionnel.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/rando_dordogne/data/directionnel.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: "#239BDC"
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 2
        }),
        radius: 6
    })
})        
  });
mviewer.customLayers.directionnel.handle = false;
} 