let audio = null;
function sounds (dataKey) {
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);
    if(!audio) return;
    audio.play();
    key.classList.add('playing');
    audio.currentTime = 0;
}

function removePlaying (item) {
    if(item.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(elem => {
    elem.addEventListener('click', function() {
        sounds(this.getAttribute('data-key'));
    });
});
keys.forEach(el => el.addEventListener('transitionend', removePlaying)
);

document.addEventListener('keydown', function (event) {
    console.log(event);
    sounds(event.keyCode);
});

document.addEventListener('play', e => {
        if (audio && audio != e.target) {
            audio.pause();
        }
        audio = e.target;
    },
    true
);

