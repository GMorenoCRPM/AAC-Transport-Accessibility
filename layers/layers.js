var wms_layers = [];

var format_FRBretagne_0 = new ol.format.GeoJSON();
var features_FRBretagne_0 = format_FRBretagne_0.readFeatures(json_FRBretagne_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRBretagne_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRBretagne_0.addFeatures(features_FRBretagne_0);
var lyr_FRBretagne_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRBretagne_0, 
                style: style_FRBretagne_0,
                interactive: true,
                title: '<img src="styles/legend/FRBretagne_0.png" /> FR Bretagne'
            });
var format_FRBretagneIso60dcoup_1 = new ol.format.GeoJSON();
var features_FRBretagneIso60dcoup_1 = format_FRBretagneIso60dcoup_1.readFeatures(json_FRBretagneIso60dcoup_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRBretagneIso60dcoup_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRBretagneIso60dcoup_1.addFeatures(features_FRBretagneIso60dcoup_1);
var lyr_FRBretagneIso60dcoup_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRBretagneIso60dcoup_1, 
                style: style_FRBretagneIso60dcoup_1,
                interactive: true,
                title: '<img src="styles/legend/FRBretagneIso60dcoup_1.png" /> FR Bretagne Iso 60 découpé'
            });
var format_FRBretagneIso30dcoup_2 = new ol.format.GeoJSON();
var features_FRBretagneIso30dcoup_2 = format_FRBretagneIso30dcoup_2.readFeatures(json_FRBretagneIso30dcoup_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRBretagneIso30dcoup_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRBretagneIso30dcoup_2.addFeatures(features_FRBretagneIso30dcoup_2);
var lyr_FRBretagneIso30dcoup_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRBretagneIso30dcoup_2, 
                style: style_FRBretagneIso30dcoup_2,
                interactive: true,
                title: '<img src="styles/legend/FRBretagneIso30dcoup_2.png" /> FR Bretagne Iso 30 découpé'
            });
var format_FRBretagneIsochrone_3 = new ol.format.GeoJSON();
var features_FRBretagneIsochrone_3 = format_FRBretagneIsochrone_3.readFeatures(json_FRBretagneIsochrone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRBretagneIsochrone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRBretagneIsochrone_3.addFeatures(features_FRBretagneIsochrone_3);
var lyr_FRBretagneIsochrone_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRBretagneIsochrone_3, 
                style: style_FRBretagneIsochrone_3,
                interactive: true,
                title: '<img src="styles/legend/FRBretagneIsochrone_3.png" /> FR Bretagne Isochrone'
            });
var format_FRBretagneStations_4 = new ol.format.GeoJSON();
var features_FRBretagneStations_4 = format_FRBretagneStations_4.readFeatures(json_FRBretagneStations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRBretagneStations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRBretagneStations_4.addFeatures(features_FRBretagneStations_4);
var lyr_FRBretagneStations_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRBretagneStations_4, 
                style: style_FRBretagneStations_4,
                interactive: true,
                title: '<img src="styles/legend/FRBretagneStations_4.png" /> FR Bretagne Stations'
            });
var format_FRBretagneTENTNetwork_5 = new ol.format.GeoJSON();
var features_FRBretagneTENTNetwork_5 = format_FRBretagneTENTNetwork_5.readFeatures(json_FRBretagneTENTNetwork_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRBretagneTENTNetwork_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRBretagneTENTNetwork_5.addFeatures(features_FRBretagneTENTNetwork_5);
var lyr_FRBretagneTENTNetwork_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRBretagneTENTNetwork_5, 
                style: style_FRBretagneTENTNetwork_5,
                interactive: true,
    title: 'FR Bretagne TENT Network<br />\
    <img src="styles/legend/FRBretagneTENTNetwork_5_0.png" /> Comprehensive network<br />\
    <img src="styles/legend/FRBretagneTENTNetwork_5_1.png" /> Core network<br />\
    <img src="styles/legend/FRBretagneTENTNetwork_5_2.png" /> <br />'
        });
var group_FRBretagne = new ol.layer.Group({
                                layers: [lyr_FRBretagne_0,lyr_FRBretagneIso60dcoup_1,lyr_FRBretagneIso30dcoup_2,lyr_FRBretagneIsochrone_3,lyr_FRBretagneStations_4,lyr_FRBretagneTENTNetwork_5,],
                                title: "FR Bretagne"});

lyr_FRBretagne_0.setVisible(true);lyr_FRBretagneIso60dcoup_1.setVisible(true);lyr_FRBretagneIso30dcoup_2.setVisible(true);lyr_FRBretagneIsochrone_3.setVisible(true);lyr_FRBretagneStations_4.setVisible(true);lyr_FRBretagneTENTNetwork_5.setVisible(true);
var layersList = [group_FRBretagne];
lyr_FRBretagne_0.set('fieldAliases', {'Name': 'Name', 'NameEN': 'NameEN', 'ISO': 'ISO', 'NUTS0': 'NUTS0', 'NUTS1': 'NUTS1', 'NUTS2': 'NUTS2', 'NUTS3': 'NUTS3', 'NUTSLvL': 'NUTSLvL', 'Areas': 'Areas', });
lyr_FRBretagneIso60dcoup_1.set('fieldAliases', {'full_id': 'full_id', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Areas': 'Areas', });
lyr_FRBretagneIso30dcoup_2.set('fieldAliases', {'full_id': 'full_id', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Areas': 'Areas', });
lyr_FRBretagneIsochrone_3.set('fieldAliases', {'full_id': 'full_id', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Areas': 'Areas', });
lyr_FRBretagneStations_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'name_br': 'name_br', 'operator': 'operator', 'railway': 'railway', 'uic_ref': 'uic_ref', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'name_ar': 'name_ar', 'name_fa': 'name_fa', 'name_fr-x-': 'name_fr-x-', 'name_ur': 'name_ur', 'official_n': 'official_n', 'official_1': 'official_1', 'public_tra': 'public_tra', 'railway_re': 'railway_re', 'train': 'train', 'wheelchair': 'wheelchair', 'short_name': 'short_name', 'level': 'level', 'network': 'network', 'railway_po': 'railway_po', 'addr_city': 'addr_city', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'platforms': 'platforms', 'old_name': 'old_name', 'amenity': 'amenity', 'collection': 'collection', 'ref': 'ref', 'door': 'door', 'entrance': 'entrance', 'railway__1': 'railway__1', 'toilets_wh': 'toilets_wh', 'backrest': 'backrest', 'colour': 'colour', 'material': 'material', 'seats': 'seats', 'source_nam': 'source_nam', 'check_date': 'check_date', 'display': 'display', 'faces': 'faces', 'support': 'support', 'visibility': 'visibility', 'ref_FR_uic': 'ref_FR_uic', 'type': 'type', 'uic_name': 'uic_name', 'internet_a': 'internet_a', 'highspeed': 'highspeed', 'payment_co': 'payment_co', 'payment_cr': 'payment_cr', 'supervised': 'supervised', 'vending': 'vending', 'office': 'office', 'opening_ho': 'opening_ho', 'tickets_pu': 'tickets_pu', 'access': 'access', 'station': 'station', 'subway': 'subway', });
lyr_FRBretagneTENTNetwork_5.set('fieldAliases', {'ID': 'ID', 'COUNTRY_CO': 'COUNTRY_CO', 'MEMBER_STA': 'MEMBER_STA', 'DESCRIPTIO': 'DESCRIPTIO', 'CORE_NETWO': 'CORE_NETWO', 'STAGE_OF_S': 'STAGE_OF_S', 'MEASURE_TY': 'MEASURE_TY', 'CORRIDORS': 'CORRIDORS', 'TYPE': 'TYPE', 'RAILWAYS_A': 'RAILWAYS_A', 'ORDER_ALL': 'ORDER_ALL', 'GEO_LENGTH': 'GEO_LENGTH', 'OBJECT_MOD': 'OBJECT_MOD', 'EDIT_DATE': 'EDIT_DATE', 'GIS_STATUS': 'GIS_STATUS', 'DUALUSE': 'DUALUSE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_FRBretagne_0.set('fieldImages', {'Name': 'TextEdit', 'NameEN': 'TextEdit', 'ISO': 'TextEdit', 'NUTS0': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS3': 'TextEdit', 'NUTSLvL': 'TextEdit', 'Areas': 'TextEdit', });
lyr_FRBretagneIso60dcoup_1.set('fieldImages', {'full_id': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Areas': '', });
lyr_FRBretagneIso30dcoup_2.set('fieldImages', {'full_id': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Areas': '', });
lyr_FRBretagneIsochrone_3.set('fieldImages', {'full_id': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Areas': '', });
lyr_FRBretagneStations_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'name_br': 'TextEdit', 'operator': 'TextEdit', 'railway': 'TextEdit', 'uic_ref': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'name_ar': 'TextEdit', 'name_fa': 'TextEdit', 'name_fr-x-': 'TextEdit', 'name_ur': 'TextEdit', 'official_n': 'TextEdit', 'official_1': 'TextEdit', 'public_tra': 'TextEdit', 'railway_re': 'TextEdit', 'train': 'TextEdit', 'wheelchair': 'TextEdit', 'short_name': '', 'level': 'TextEdit', 'network': 'TextEdit', 'railway_po': 'TextEdit', 'addr_city': 'TextEdit', 'addr_house': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_stree': 'TextEdit', 'platforms': 'TextEdit', 'old_name': 'TextEdit', 'amenity': 'TextEdit', 'collection': '', 'ref': '', 'door': 'TextEdit', 'entrance': 'TextEdit', 'railway__1': 'TextEdit', 'toilets_wh': '', 'backrest': 'TextEdit', 'colour': 'TextEdit', 'material': 'TextEdit', 'seats': 'TextEdit', 'source_nam': 'TextEdit', 'check_date': '', 'display': 'TextEdit', 'faces': '', 'support': 'TextEdit', 'visibility': 'TextEdit', 'ref_FR_uic': 'TextEdit', 'type': 'TextEdit', 'uic_name': '', 'internet_a': 'TextEdit', 'highspeed': 'TextEdit', 'payment_co': 'TextEdit', 'payment_cr': 'TextEdit', 'supervised': 'TextEdit', 'vending': 'TextEdit', 'office': 'TextEdit', 'opening_ho': 'TextEdit', 'tickets_pu': 'TextEdit', 'access': 'TextEdit', 'station': 'TextEdit', 'subway': 'TextEdit', });
lyr_FRBretagneTENTNetwork_5.set('fieldImages', {'ID': 'TextEdit', 'COUNTRY_CO': 'TextEdit', 'MEMBER_STA': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'CORE_NETWO': 'TextEdit', 'STAGE_OF_S': 'TextEdit', 'MEASURE_TY': 'TextEdit', 'CORRIDORS': 'TextEdit', 'TYPE': 'TextEdit', 'RAILWAYS_A': 'TextEdit', 'ORDER_ALL': 'Range', 'GEO_LENGTH': 'TextEdit', 'OBJECT_MOD': 'TextEdit', 'EDIT_DATE': 'DateTime', 'GIS_STATUS': 'TextEdit', 'DUALUSE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_FRBretagne_0.set('fieldLabels', {});
lyr_FRBretagneIso60dcoup_1.set('fieldLabels', {});
lyr_FRBretagneIso30dcoup_2.set('fieldLabels', {});
lyr_FRBretagneIsochrone_3.set('fieldLabels', {});
lyr_FRBretagneStations_4.set('fieldLabels', {});
lyr_FRBretagneTENTNetwork_5.set('fieldLabels', {});
lyr_FRBretagneTENTNetwork_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});