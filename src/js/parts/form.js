const forms = Array.from(document.querySelectorAll('form'));

let checkEachInput;
let check = [];
let isValidate;

function isValidEmail(emailAddress) {
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function isValidPhone(phoneNumber) {
    let pattern = new RegExp(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/g);
    return pattern.test(phoneNumber);
}
function valid() {
    checkEachInput = true;
    check.push(checkEachInput);
}

function invalid() {
    checkEachInput = false;
    check.push(checkEachInput);
}

function validPhone(value) {
    if (isValidPhone(value)) {
        valid();
    } else {
        invalid();
    }
}

function validEmail(value, input) {
    if (!isValidEmail(value)) {
        invalid();
    } else {
        valid();
    }
}

function validByLength(value, length) {
    if (value.length > length) {
        valid();
    } else {
        invalid();
    }
}

function validByBetween(value, from, to) {
    if ((value.length <= to) && (value.length >= from) && value.trim().length) {
        valid();
    } else {
        invalid();
    }
}

function validChecked(input) {
    if (input.checked) {
        valid();
    } else {
        invalid();
    }
}
export default () => {
    forms.forEach(form => {

        form.addEventListener('submit', function (ev) {
            const inputs = Array.from(this.querySelectorAll('.js-validate'));

            if (inputs.length) {
                inputs.forEach((input) => {
                    const type = input.type || input.dataset.type;
                    const value = input.value;

                    switch (type) {
                        case 'text':
                            validByBetween(value, 2, 50);
                            break;
                        case 'tel':
                            validPhone(value);
                            break;
                        case 'email':
                            validEmail(value, input);
                            break;
                        case 'textarea':
                            validByBetween(value, 1, 500);
                            break;
                        case 'checkbox':
                            validChecked(input);
                            break;
                        case 'radio':
                            validChecked(input);
                            break;
                        default:
                            console.log(type);
                            break;
                    }

                    if (!checkEachInput) {
                        input.classList.add('is-error');

                        setTimeout( function () {
                            input.classList.remove('is-error');
                        }, 3000);
                    }
                });
            }

            if (inputs.length) {
                if (check.length) {
                    isValidate = check.every(el => el === true);
                }

                if (!isValidate) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    check = [];
                } else {
                    return true;
                }
            }
        });
    });
};
