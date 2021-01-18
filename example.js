$(document).ready(function($) {
    var options = {
        // id: 59777392,
        id: 248563083, // 360 video id
        width: 540,
        loop: false
    };
    var player = new Vimeo.Player('vimeo_demo', options);

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

    player.getTextTracks().then(function(tracks) {
        console.log('an array of track objects:',tracks);
        }).catch(function(error) {
    });

    player.getVideoEmbedCode().then(function(embedCode) {
        console.log('embedCode = <iframe> embed code:',embedCode);
        }).catch(function(error) {
    });

    player.getVideoId().then(function(id) {
        console.log('id = the video id:',id);
        }).catch(function(error) {
   });

    player.getVideoTitle().then(function(title) {
        console.log('title = the title of the video:',title);
        }).catch(function(error) {
    });

    player.getVideoWidth().then(function(width) {
        console.log('width = the width of the video that is currently playing:', width);
        }).catch(function(error) {
    });

    player.getVideoHeight().then(function(height) {
        console.log('height = the height of the video that is currently playing:', height);
        }).catch(function(error) {
    });

    Promise.all([player.getVideoWidth(), player.getVideoHeight()]).then(function(dimensions) {
        var width = dimensions[0];
        var height = dimensions[1];
        console.log('To get both the width and height, you can do this: width:',width,',height:',height);
    });

    player.getVideoUrl().then(function(url) {
        console.log('url = the vimeo.com url for the video:',url);
        }).catch(function(error) {
    });

    player.getVolume().then(function(volume) {
        console.log('volume = the volume level of the player:',volume);
        }).catch(function(error) {
    });

    player.getQualities().then(function(qualities) {
        console.log('qualities = an array of quality objects:',qualities);
        }).catch(function(error) {
    });

    player.getCameraProps().then(function(cameraProps) {
        console.log('cameraProps = the current camera properties:',cameraProps);
        }).catch(function(error) {
    });

    /*EVENTS*/
    var onPlay = function(data) {
        console.log('Event Play = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    };
    player.on('play', onPlay);

    var pause = function(data) {
        console.log('Event pause = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    };
    player.on('pause', pause);

    var ended = function(data) {
        console.log('Event ended = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    };
    player.on('ended', ended);

    // var timeupdate = function(data) {
    //     console.log('Event timeupdate = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    // };
    // player.on('timeupdate', timeupdate);

    // var progress = function(data) {
    //     console.log('Event progress = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    // };
    // player.on('progress', progress);

    // var seeking = function(data) {
    //     console.log('Event seeking = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    // };
    // player.on('seeking', seeking);

    // var seeked = function(data) {
    //     console.log('Event seeked = duration:',data.duration,'seconds:',data.seconds,'percent:',data.percent);
    // };
    // player.on('seeked', seeked);

    var texttrackchange = function(data) {
        console.log('Event texttrackchange = kind:',data.kind,'label:',data.label,'language:',data.language);
    };
    player.on('texttrackchange', texttrackchange);

    // TODO
    // var chapterchange = function(data) {
    //     // console.log('Event chapterchange = kind:',data.kind,'label:',data.label,'language:',data.language);
    // };
    // player.on('chapterchange', chapterchange);


    var volumechange = function(data) {
        console.log('Event volumechange = volume:',data.volume);
    };
    player.on('volumechange', volumechange);

    var loaded = function(data) {
        console.log('Event loaded = id:',data.id);
    };
    player.on('loaded', loaded);

    var durationchange = function(data) {
        console.log('Event durationchange :',data.duration);
    };
    player.on('durationchange', durationchange);

    var fullscreenchange = function(data) {
        console.log('Event fullscreenchange :',data.fullscreen);
    };
    player.on('fullscreenchange', fullscreenchange);

    var qualitychange = function(data) {
        console.log('Event qualitychange :',data.quality);
    };
    player.on('qualitychange', qualitychange);

    var resize = function(data) {
        console.log('Event resize :videoWidth: ',data.videoWidth,'videoHeight:',data.videoHeight);
    };
    player.on('resize', resize);

    var camerachange = function(data) {
        console.log('Event camerachange :yaw: ',data.yaw,'pitch:',data.pitch,'roll:',data.roll,'fov:',data.fov);
    };
    player.on('camerachange', camerachange);
});