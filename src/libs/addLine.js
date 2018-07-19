export default function addLine(option) {

    var options = option || {};
    var map = options.map;
    var width = options.width || 10;
    var color = options.color || '#888';



    var data = options.data || [[ 116.38843172, 39.89191859]];
    var idNumber = Math.round(Math.random()*1000).toString(36);
    
    map.addLayer({
        'id': idNumber,
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': data
                }
            }
        },
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': color,
            'line-width': width
        }
    });
}