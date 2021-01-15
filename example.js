var options = {
    id: 59777392,
    width: 540,
    loop: true
};
var player = new Vimeo.Player('vimeo_demo', options);
var onPlay = function(data) {
    console.log('arararam');
};
player.on('play', onPlay);
