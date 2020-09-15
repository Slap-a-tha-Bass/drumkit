// definitions
let body = $('body');
let keys = $('.keys');
let key = $('.key');

// onpress functionality for each key
body.keydown(function(e){
    if (e.which === 65) {
        $('#A').addClass('highlight');
    }
    if (e.which === 83) {
        $('#S').addClass('highlight');
    }
    if (e.which === 68) {
        $('#D').addClass('highlight');
    }
    if (e.which === 70) {
        $('#F').addClass('highlight');
    }
    if (e.which === 71) {
        $('#G').addClass('highlight');
    }
    if (e.which === 72) {
        $('#H').addClass('highlight');
    }
    if (e.which === 74) {
        $('#J').addClass('highlight');
    }
    if (e.which === 75) {
        $('#K').addClass('highlight');
    }
    if (e.which === 76) {
        $('#L').addClass('highlight');
    }
    const audio = document.querySelector(`audio[data-key='${e.which}']`)
    if(!audio) {return;}
    audio.currentTime = 0;
    audio.play();
});
// onrelease
body.keyup(function(e){
    if (e.which === 65){
        $('#A').removeClass('highlight');
    }
    if (e.which === 83) {
        $('#S').removeClass('highlight');
    }
    if (e.which === 68) {
        $('#D').removeClass('highlight');
    }
    if (e.which === 70) {
        $('#F').removeClass('highlight');
    }
    if (e.which === 71) {
        $('#G').removeClass('highlight');
    }
    if (e.which === 72) {
        $('#H').removeClass('highlight');
    }
    if (e.which === 74) {
        $('#J').removeClass('highlight');
    }
    if (e.which === 75) {
        $('#K').removeClass('highlight');
    }
    if (e.which === 76) {
        $('#L').removeClass('highlight');
    }
});