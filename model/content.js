


let btns = document.querySelectorAll('[class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0"]')

var i = 0
setInterval(() => {

    var btn = btns[i]
    btn.click();
    i++
}, 100);

setTimeout(() => {
    clearInterval()
}, 2500);


