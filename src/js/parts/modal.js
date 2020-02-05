import 'magnific-popup';


const target = $('.js-modal-open');
const targetVideo = $('.js-modal-open-video');

let defaultModalSettings = {
    mainClass: 'mfp-move-from-top',
    removalDelay: 300,
    type: 'inline',
    tClose: 'Закрыть (Esc)',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto'
};

let iframeSettings = {
    type: 'iframe'
};

let callbacksSettings = {
    callbacks: {
        beforeOpen: function () {

        },
        open: function () {
            // let instance = $.magnificPopup.instance;
            // instance.currItem.inlineElement.find('.input')[0].focus();
        },
        afterClose: function () {

        }
    }
};

let regularSettings = $.extend({}, defaultModalSettings, callbacksSettings);
let videoSettings = $.extend({}, defaultModalSettings, iframeSettings, callbacksSettings);


export let initModalOpenClick = (settings = {}) => {
    settings = $.extend(settings, regularSettings);
    $.magnificPopup.open(settings);
};

export const initModal = () => {
    targetVideo.magnificPopup(videoSettings);
    target.magnificPopup(regularSettings);
};

