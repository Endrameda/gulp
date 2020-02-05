import device from 'current-device';

const mapId = $('#map');

function init() {
    const map = new ymaps.Map('map', {
        center: mapId.data('center'),
        zoom: 16,
        controls: [],
        behaviors: ['drag', 'dblClickZoom', 'multiTouch']
    });

    const placemark = new ymaps.Placemark(mapId.data('placemark'), {
        hintContent: mapId.data('content')
    }, {
        iconLayout: 'default#image',
        iconImageHref: './assets/img/map/map-marker.svg',
        iconImageSize: [146, 160],
        iconImageOffset: [-73, -100],
    });

    if (!device.desktop()) {
        map.behaviors.disable('drag');
    }

    map.geoObjects.add(placemark);
}

export default () => {
    if (mapId.length) {
        ymaps.ready(init);
    }
};
