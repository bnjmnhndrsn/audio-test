export default class Audio {
    constructor(){
        this.el = document.createElement('div');
        this.el.classList.add('audio-container');
        this.audio = document.createElement('audio');
        this.audio.controls = true;
        this.el.appendChild(this.audio);
    }

    setSrc(src, time){
        this.audio.src = src;
        const callback = () => {
            if (time) {
                this.audio.currentTime = time;
            }
            this.audio.play();
            this.audio.removeEventListener('canplay', callback);
            this.playing = true;
        };

        this.audio.addEventListener('canplay', callback);
    }

    togglePlayback(){
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    skipForward(){
        this.audio.currentTime += 15;
    }

    skipBack(){
        this.audio.currentTime -= 15;
    }
}
