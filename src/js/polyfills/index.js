import svg4everybody from 'svg4everybody';
import 'picturefill';
import objectFitImages from 'object-fit-images';

$(() => {
    const images = document.querySelectorAll('.js-object-fit');
    objectFitImages(images, { watchMQ: true });
    svg4everybody();
});
