const videos = document.getElementById('videos').getElementsByTagName('video');
for (let i = 0; i < videos.length; i++) {
	videos[i].addEventListener('click', function() {
		if (this.paused) {
			this.play();
		} else {
			this.pause();
		}
	});
}