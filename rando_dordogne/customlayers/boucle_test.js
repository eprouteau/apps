{
mviewer.customLayers.boucle = {};
var boucle = mviewer.customLayers.boucle;

boucle.legend = { items: [
    {
        label: "Boucle",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(252, 205, 29,1.0)', width: 2 })
        })]
    }
] };

mviewer.customLayers.boucle.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/rando_dordogne/data/bouclee.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('type')) {           
                switch (feature.get('type')) {
                    case "Boucle":
                        stl = boucle.legend.items[0].styles;
                        break;
                }
            }            
            return stl;
        }
});
mviewer.customLayers.boucle.handle = false;
}