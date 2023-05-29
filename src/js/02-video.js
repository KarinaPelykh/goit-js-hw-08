import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const keyVideoTime = " videoplayer-current-time";

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const getTime = function (data){
  const seconds = data.seconds
    localStorage.setItem(keyVideoTime, seconds)
}
player.on('timeupdate', throttle(getTime, 1000));

  const savedTime = localStorage.getItem(keyVideoTime);

if(savedTime){
    player.setCurrentTime(savedTime).then(function (seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        
            break;

        default:
      
            break;
    }
})
}
