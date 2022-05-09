// {
// mviewer.customLayers.boucle = {};
// var boucle = mviewer.customLayers.boucle;

// boucle.legend = { items: [
//     {
//         label: "Boucle",
//         geometry: "LineString",
//         styles: [new ol.style.Style({
//             stroke: new ol.style.Stroke({ color: 'rgba(252, 205, 29,1.0)', width: 2 })
//         })]
//     }
// ] };

// mviewer.customLayers.boucle.layer = new ol.layer.Vector({
//         source: new ol.source.Vector({
//             url: "apps/rando_dordogne/data/boucle.geojson",
//             format: new ol.format.GeoJSON()
//         }),
//         style: function(feature, resolution) {
//             var stl;            
//             if (feature.get('type_parcours')) {           
//                 switch (feature.get('type_parcours')) {
//                     case "Boucle PDIPR":
//                         stl = boucle.legend.items[0].styles;
//                         break;
//                 }
//             }            
//             return stl;
//         }
// });
// mviewer.customLayers.boucle.handle = false;
// }
const layer =  new ol.layer.Vector({
    source: new ol.source.Vector({
        url: "apps/rando_dordogne/data/boucle.geojson",
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(252, 205, 29,1.0)', width: 2 })
    })
});

const handle = function(features, views) {
    var renderHTML = function (elements) {
        features.forEach(feature => {
            // console.log(feature.properties.ascent)
            // json = '{"testhandle": "test"}'
            // elements = elements.concat(json);
            elements = elements.concat(
                features.getProperties().map(d =>
                    ({
                        properties: {
                            ...d.getProperties(),
                            randomValue: math.random()
                        }
                    })
                )
            )
        });
        var l = mviewer.getLayer("boucle");
        var html;
        if (l.template) {
            html = info.templateHTMLContent(elements, l);
        } else {
            html = info.formatHTMLContent(elements, l);
        }
        var view = views["right-panel"];
        view.layers.push({
            "id": view.layers.length + 1,
            "firstlayer": true,
            "manyfeatures": (elements.length > 1),
            "nbfeatures": elements.length,
            "name": l.name,
            "layerid": "boucle",
            "theme_icon": l.icon,
            "html": html
        });
    };
    renderHTML(features);
};

new CustomLayer('boucle', layer,null,handle);