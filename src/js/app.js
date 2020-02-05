'use strict';

import './polyfills';

import initMap from './parts/map';
import { initModal } from './parts/modal';
import initMask from './parts/mask';

$(() => {
    initModal();
    initMap();
    initMask();
});
