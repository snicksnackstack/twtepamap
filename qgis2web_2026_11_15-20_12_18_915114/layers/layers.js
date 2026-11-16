var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EPABoundary_1 = new ol.format.GeoJSON();
var features_EPABoundary_1 = format_EPABoundary_1.readFeatures(json_EPABoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPABoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPABoundary_1.addFeatures(features_EPABoundary_1);
var lyr_EPABoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPABoundary_1, 
                style: style_EPABoundary_1,
                popuplayertitle: 'EPA Boundary',
                interactive: false,
                title: '<img src="styles/legend/EPABoundary_1.png" /> EPA Boundary'
            });
var format_VeoliaWaterBoundary_2 = new ol.format.GeoJSON();
var features_VeoliaWaterBoundary_2 = format_VeoliaWaterBoundary_2.readFeatures(json_VeoliaWaterBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeoliaWaterBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeoliaWaterBoundary_2.addFeatures(features_VeoliaWaterBoundary_2);
var lyr_VeoliaWaterBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeoliaWaterBoundary_2, 
                style: style_VeoliaWaterBoundary_2,
                popuplayertitle: 'VeoliaWaterBoundary',
                interactive: false,
                title: '<img src="styles/legend/VeoliaWaterBoundary_2.png" /> VeoliaWaterBoundary'
            });
var format_PAPMWaterBoundary_3 = new ol.format.GeoJSON();
var features_PAPMWaterBoundary_3 = format_PAPMWaterBoundary_3.readFeatures(json_PAPMWaterBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAPMWaterBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPMWaterBoundary_3.addFeatures(features_PAPMWaterBoundary_3);
var lyr_PAPMWaterBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAPMWaterBoundary_3, 
                style: style_PAPMWaterBoundary_3,
                popuplayertitle: 'PAPM Water Boundary',
                interactive: false,
                title: '<img src="styles/legend/PAPMWaterBoundary_3.png" /> PAPM Water Boundary'
            });
var format_OConnorWaterBoundary_4 = new ol.format.GeoJSON();
var features_OConnorWaterBoundary_4 = format_OConnorWaterBoundary_4.readFeatures(json_OConnorWaterBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OConnorWaterBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OConnorWaterBoundary_4.addFeatures(features_OConnorWaterBoundary_4);
var lyr_OConnorWaterBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OConnorWaterBoundary_4, 
                style: style_OConnorWaterBoundary_4,
                popuplayertitle: 'O\'Connor Water Boundary',
                interactive: false,
                title: '<img src="styles/legend/OConnorWaterBoundary_4.png" /> O\'Connor Water Boundary'
            });
var format_TWTStudyHouseholds_5 = new ol.format.GeoJSON();
var features_TWTStudyHouseholds_5 = format_TWTStudyHouseholds_5.readFeatures(json_TWTStudyHouseholds_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TWTStudyHouseholds_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TWTStudyHouseholds_5.addFeatures(features_TWTStudyHouseholds_5);
var lyr_TWTStudyHouseholds_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TWTStudyHouseholds_5, 
                style: style_TWTStudyHouseholds_5,
                popuplayertitle: 'TWT Study Households',
                interactive: true,
    title: 'TWT Study Households<br />\
    <img src="styles/legend/TWTStudyHouseholds_5_0.png" /> 1915 - 1930, Likely Material: Lead<br />\
    <img src="styles/legend/TWTStudyHouseholds_5_1.png" /> 1931 - 1960, Likely Material: Cast or Galvanized Iron<br />\
    <img src="styles/legend/TWTStudyHouseholds_5_2.png" /> 1961 - 1975, Likely Material: Galvanized Iron or Steel<br />\
    <img src="styles/legend/TWTStudyHouseholds_5_3.png" /> 1976 - 1990, Likely Material: Copper or Plastic<br />\
    <img src="styles/legend/TWTStudyHouseholds_5_4.png" /> 1991 - 2005, Likely Material: Copper or Stainless Steel<br />' });
var format_KnownLeadConnectorsinCopperServiceLines_6 = new ol.format.GeoJSON();
var features_KnownLeadConnectorsinCopperServiceLines_6 = format_KnownLeadConnectorsinCopperServiceLines_6.readFeatures(json_KnownLeadConnectorsinCopperServiceLines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KnownLeadConnectorsinCopperServiceLines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KnownLeadConnectorsinCopperServiceLines_6.addFeatures(features_KnownLeadConnectorsinCopperServiceLines_6);
var lyr_KnownLeadConnectorsinCopperServiceLines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KnownLeadConnectorsinCopperServiceLines_6, 
                style: style_KnownLeadConnectorsinCopperServiceLines_6,
                popuplayertitle: 'Known Lead Connectors in Copper Service Lines',
                interactive: false,
                title: '<img src="styles/legend/KnownLeadConnectorsinCopperServiceLines_6.png" /> Known Lead Connectors in Copper Service Lines'
            });
var format_KnownGalvanizedIronorSteelPipes_7 = new ol.format.GeoJSON();
var features_KnownGalvanizedIronorSteelPipes_7 = format_KnownGalvanizedIronorSteelPipes_7.readFeatures(json_KnownGalvanizedIronorSteelPipes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KnownGalvanizedIronorSteelPipes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KnownGalvanizedIronorSteelPipes_7.addFeatures(features_KnownGalvanizedIronorSteelPipes_7);
var lyr_KnownGalvanizedIronorSteelPipes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KnownGalvanizedIronorSteelPipes_7, 
                style: style_KnownGalvanizedIronorSteelPipes_7,
                popuplayertitle: 'Known Galvanized Iron or Steel Pipes',
                interactive: false,
                title: '<img src="styles/legend/KnownGalvanizedIronorSteelPipes_7.png" /> Known Galvanized Iron or Steel Pipes'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_EPABoundary_1.setVisible(true);lyr_VeoliaWaterBoundary_2.setVisible(true);lyr_PAPMWaterBoundary_3.setVisible(true);lyr_OConnorWaterBoundary_4.setVisible(true);lyr_TWTStudyHouseholds_5.setVisible(true);lyr_KnownLeadConnectorsinCopperServiceLines_6.setVisible(true);lyr_KnownGalvanizedIronorSteelPipes_7.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_EPABoundary_1,lyr_VeoliaWaterBoundary_2,lyr_PAPMWaterBoundary_3,lyr_OConnorWaterBoundary_4,lyr_TWTStudyHouseholds_5,lyr_KnownLeadConnectorsinCopperServiceLines_6,lyr_KnownGalvanizedIronorSteelPipes_7];
lyr_EPABoundary_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'PLACEFP': 'PLACEFP', 'PLACENS': 'PLACENS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'PCICBSA': 'PCICBSA', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_VeoliaWaterBoundary_2.set('fieldAliases', {'id': 'id', });
lyr_PAPMWaterBoundary_3.set('fieldAliases', {'id': 'id', });
lyr_OConnorWaterBoundary_4.set('fieldAliases', {'id': 'id', });
lyr_TWTStudyHouseholds_5.set('fieldAliases', {'Water Provider': 'Water Provider', 'Section ID': 'Section ID', 'HH ID': 'HH ID', 'Street Address': 'Street Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Year Built': 'Year Built', });
lyr_KnownLeadConnectorsinCopperServiceLines_6.set('fieldAliases', {'ID': 'ID', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip Code': 'Zip Code', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_KnownGalvanizedIronorSteelPipes_7.set('fieldAliases', {'ID': 'ID', 'Water Provider': 'Water Provider', 'StreetAdr': 'StreetAdr', 'City': 'City', 'State': 'State', 'Zip Code': 'Zip Code', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EPABoundary_1.set('fieldImages', {'STATEFP': 'TextEdit', 'PLACEFP': 'TextEdit', 'PLACENS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'PCICBSA': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_VeoliaWaterBoundary_2.set('fieldImages', {'id': '', });
lyr_PAPMWaterBoundary_3.set('fieldImages', {'id': '', });
lyr_OConnorWaterBoundary_4.set('fieldImages', {'id': '', });
lyr_TWTStudyHouseholds_5.set('fieldImages', {'Water Provider': 'TextEdit', 'Section ID': 'DateTime', 'HH ID': 'Range', 'Street Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Year Built': 'Range', });
lyr_KnownLeadConnectorsinCopperServiceLines_6.set('fieldImages', {'ID': 'Range', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip Code': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_KnownGalvanizedIronorSteelPipes_7.set('fieldImages', {'ID': 'Range', 'Water Provider': 'TextEdit', 'StreetAdr': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip Code': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EPABoundary_1.set('fieldLabels', {'STATEFP': 'no label', 'PLACEFP': 'no label', 'PLACENS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'PCICBSA': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_VeoliaWaterBoundary_2.set('fieldLabels', {'id': 'no label', });
lyr_PAPMWaterBoundary_3.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_OConnorWaterBoundary_4.set('fieldLabels', {'id': 'no label', });
lyr_TWTStudyHouseholds_5.set('fieldLabels', {'Water Provider': 'inline label - visible with data', 'Section ID': 'hidden field', 'HH ID': 'inline label - visible with data', 'Street Address': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Year Built': 'inline label - always visible', });
lyr_KnownLeadConnectorsinCopperServiceLines_6.set('fieldLabels', {'ID': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip Code': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_KnownGalvanizedIronorSteelPipes_7.set('fieldLabels', {'ID': 'no label', 'Water Provider': 'no label', 'StreetAdr': 'no label', 'City': 'no label', 'State': 'no label', 'Zip Code': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_KnownGalvanizedIronorSteelPipes_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});