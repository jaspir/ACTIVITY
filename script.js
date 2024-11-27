const pauseButton = document.getElementById('pause');
const playButton = document.getElementById('play');
const body = document.getElementById('bod');

pauseButton.addEventListener('click', () =>{
    document.getElementsByClassName('item1')[0].getAnimations()[0].playbackRate = 0;
    document.getElementsByClassName('item2')[0].getAnimations()[0].playbackRate = 0;
    document.getElementsByClassName('item3')[0].getAnimations()[0].playbackRate = 0;
    document.getElementsByClassName('item4')[0].getAnimations()[0].playbackRate = 0;
    document.getElementsByClassName('item5')[0].getAnimations()[0].playbackRate = 0;
    document.getElementsByClassName('item6')[0].getAnimations()[0].playbackRate = 0;
    document.getElementsByClassName('item7')[0].getAnimations()[0].playbackRate = 0;
});

playButton.addEventListener('click', () => {
    document.getElementsByClassName('item1')[0].getAnimations()[0].playbackRate = 1;
    document.getElementsByClassName('item2')[0].getAnimations()[0].playbackRate = 1;
    document.getElementsByClassName('item3')[0].getAnimations()[0].playbackRate = 1;
    document.getElementsByClassName('item4')[0].getAnimations()[0].playbackRate = 1;
    document.getElementsByClassName('item5')[0].getAnimations()[0].playbackRate = 1;
    document.getElementsByClassName('item6')[0].getAnimations()[0].playbackRate = 1;
    document.getElementsByClassName('item7')[0].getAnimations()[0].playbackRate = 1;
});

