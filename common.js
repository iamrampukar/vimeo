
$(document).ready(function($) {
	var options = {
		// id: 203680012,
		id: 76979871,
		// controls: false,
		pip:true,
		width: 640
	};
	var player = new Vimeo.Player('play_demo', options);

	$('#btnPlay').on('click',function(){
		player.play().then(function(){
    		}).catch(function(error) {
    	});
	});

	$('#btnVideoUrl').on('click',function(){
		player.getVideoUrl().then(function(url) {
			$('#display').text(url);
			}).catch(function(error) {
		});
	});

	$('#btnTitle').on('click',function(){
		player.getVideoTitle().then(function(title) {
			$('#display').text(title);
			}).catch(function(error) {
		});
	});

	$('#btnPIP').on('click',function(){
		player.requestPictureInPicture().then(function() {
			}).catch(function(error) {
		});
	});

	$('#btnTextTrack').on('click',function(){
		player.disableTextTrack().then(function() {
			}).catch(function(error) {
		});
	});

	$('#btnPause').on('click',function(){
		player.pause().then(function() {
			}).catch(function(error) {
		});
	});

	$('#btnMute').on('click',function(){
		player.setMuted(true);
	});

	$('#btnUnmute').on('click',function(){
		player.setMuted(false);
	});

	$('#btnCurrentTime').on('click',function(){
		var getValue = $('#current-time-input').val(),
		getValue = parseFloat(getValue);
		player.setCurrentTime(getValue).then(function(seconds) {
		}).catch(function(error) {
		});
	});

	$('#btnPlayRate').on('click',function(){
		var getValue = $('#play-rate').val(),
		getValue = parseFloat(getValue);
		player.setPlaybackRate(getValue).then(function(playbackRate) {
			}).catch(function(error) {
		});
	});

	$('#btnLoop').on('click',function(){
		player.setLoop(true);
	});

	$('#btnUnloop').on('click',function(){
		player.setLoop(false);
	});

	$('#btnVolume').on('click',function(){
		var getVolume = $('#volume').val();
		getVolume = parseFloat(getVolume);
		player.setVolume(getVolume);
	});

	$('#textTracks').on('change',function(){
		var langSel = $('#textTracks').val();
		player.enableTextTrack(langSel).then(function(track) {
			}).catch(function(error) {
		});
	});

	$('#qualitySelect').on('change',function(){
		var qualitySel = $('#qualitySelect').val();
		player.setQuality(qualitySel).then(function(quality) {
			}).catch(function(error) {
    	});
	});
	
	$('#btnLoadVideo').on('click',function(){
		var getLoadVideo = $('#load-video').val();
		getLoadVideo = parseInt(getLoadVideo);
		player.loadVideo(getLoadVideo).then(function(id) {
			}).catch(function(error) {
		});
	});

	$('#changeColor').on('change',function(){
		var selColor = $('#changeColor').val();
	 	player.setColor(selColor).catch(function() {
        	});
	});

	$('#btnFullScreen').on('click',function(){
		player.requestFullscreen();
		setTimeout(() => {
			player.exitFullscreen();
		}, 3000);
	});
});

