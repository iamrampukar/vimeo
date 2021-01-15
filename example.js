$(document).ready(function($) {
    var options = {
        id: 59777392,
        width: 540,
        loop: false
    };
    var player = new Vimeo.Player('vimeo_demo', options);

    /*VIMEO LOGS*/
    /*
    1. getLoop
    */
    player.getLoop().then(function(loop) {
        console.log('Loop',loop);
        }).catch(function(error) {
    });

    player.getColor().then(function(color) {
        console.log('Color', color);
        }).catch(function(error) {
    });

    player.on('play', function() {
        console.log('played the video!');
    });

    player.ready().then(function() {
        console.log('the player is ready');
    });

    player.getPictureInPicture().then(function(pip) {
        console.log('whether picture-in-picture is turned on or off:',pip);
        }).catch(function(error) {
    });

    player.getAutopause().then(function(autopause) {
        console.log('player autopause: ',autopause);
        }).catch(function(error) {
    });

    player.getBuffered().then(function(buffered) {
        console.log('an array of the buffered video time ranges:',buffered);
        }).catch(function(error) {
    });

    player.getChapters().then(function(chapters) {
        console.log('player in chapters:', chapters);
        }).catch(function(error) {
    });

    // player.getCurrentChapter().then(function(chapter) {
    //     console.log('getCurrentChapter:',chapter);
    //     }).catch(function(error) {
    // });

    player.getCurrentTime().then(function(seconds) {
        console.log('the current playback position:',seconds);
        }).catch(function(error) {
    });

    player.getDuration().then(function(duration) {
        console.log('the duration of the video in seconds', duration);
        }).catch(function(error) {
    });

    player.getEnded().then(function(ended) {
        console.log('whether or not the video has ended:',ended);
        }).catch(function(error) {
    });

    player.getMuted().then(function(muted) {
        console.log('whether muted is turned on or not:',muted);
        }).catch(function(error) {
    });

    player.getPaused().then(function(paused) {
        console.log('whether or not the player is paused:',paused);
        }).catch(function(error) {
    });

    player.getPlaybackRate().then(function(playbackRate) {
        console.log('playbackRate = a numeric value of the current playback rate:',playbackRate);
        }).catch(function(error) {
    });

    // player.getPlayed().then(function(played) {
    //     console.log('played = array values of the played video time ranges.:',played);
    //     }).catch(function(error) {
    // });
});