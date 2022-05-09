{
mviewer.customLayers.cyclo = {};
var cyclo = mviewer.customLayers.cyclo;

cyclo.legend = { items: [
    {
        label: "cyclo",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#C90076', width: 2 })
        })]
    }
] };

mviewer.customLayers.cyclo.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/rando_dordogne/data/cyclo.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('type_parcours')) {           
                switch (feature.get('type_parcours')) {
                    case "Itinéraire cyclo":
                        stl = cyclo.legend.items[0].styles;
                        break;
                }
            }            
            return stl;
        }
});
mviewer.customLayers.cyclo.handle = false;
}