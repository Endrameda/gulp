import maskInput from 'vanilla-text-mask/dist/vanillaTextMask';

export default () => {
    let phoneMask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    let tels = Array.from(document.querySelectorAll('.js-mask'));
    tels.forEach(tel => {

        let handlerFocus = function (e) {
            if (tel.value === '') {
                tel.value = '+7';
            } else {
                tel.placeholder = '';
            }
        };

        let handlerBlur = function (e) {
            tel.placeholder = '';
        };
        tel.addEventListener('focus', handlerFocus);
        tel.addEventListener('blur', handlerBlur);

        let maskedInputController = maskInput({
            inputElement: tel,
            guide: true,
            mask: phoneMask,
        });
    });
};
