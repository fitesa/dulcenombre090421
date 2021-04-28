var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DulceNombre090421_1 = new ol.format.GeoJSON();
var features_DulceNombre090421_1 = format_DulceNombre090421_1.readFeatures(json_DulceNombre090421_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DulceNombre090421_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DulceNombre090421_1.addFeatures(features_DulceNombre090421_1);
var lyr_DulceNombre090421_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DulceNombre090421_1, 
                style: style_DulceNombre090421_1,
                interactive: true,
    title: 'Dulce Nombre 09/04/21<br />\
    <img src="styles/legend/DulceNombre090421_1_0.png" /> Muy Bajo<br />\
    <img src="styles/legend/DulceNombre090421_1_1.png" /> Bajo<br />\
    <img src="styles/legend/DulceNombre090421_1_2.png" /> Media<br />\
    <img src="styles/legend/DulceNombre090421_1_3.png" /> Alto<br />\
    <img src="styles/legend/DulceNombre090421_1_4.png" /> Muy Alto<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_DulceNombre090421_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DulceNombre090421_1];
lyr_DulceNombre090421_1.set('fieldAliases', {'Media': 'Media', 'Mediana': 'Mediana', 'Desv Tipic': 'Desv Tipic', 'Minimo': 'Minimo', 'Maximo': 'Maximo', 'Id': 'Id', });
lyr_DulceNombre090421_1.set('fieldImages', {'Media': 'TextEdit', 'Mediana': 'TextEdit', 'Desv Tipic': 'TextEdit', 'Minimo': 'TextEdit', 'Maximo': 'TextEdit', 'Id': 'TextEdit', });
lyr_DulceNombre090421_1.set('fieldLabels', {'Media': 'header label', 'Mediana': 'header label', 'Desv Tipic': 'header label', 'Minimo': 'header label', 'Maximo': 'header label', 'Id': 'header label', });
lyr_DulceNombre090421_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});