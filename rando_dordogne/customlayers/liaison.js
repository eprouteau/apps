{
mviewer.customLayers.liaison = {};
var liaison = mviewer.customLayers.liaison;

liaison.legend = { items: [
    {
        label: "Liaison",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: 'rgba(36, 112, 30,1.0)', width: 2 })
        })]
    },
] };

mviewer.customLayers.liaison.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "apps/rando_dordogne/data/liaison.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl;            
            if (feature.get('type')) {           
                switch (feature.get('type')) {
                    case "Boucle":
                        stl = liaison.legend.items[0].styles;
                        break;     
                    default:
                        stl = liaison.legend.items[0].styles;
                }
            }            
            return stl;
        }
});
mviewer.customLayers.liaison.handle = false;
}