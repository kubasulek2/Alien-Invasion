$( () => {
   /* const soundtrack = new Audio('../music/Quirky-Action2.mp3');
    soundtrack.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    soundtrack.play();*/

    let mouseX = 0, mouseY = 0;
    $('#game').on('mousemove', function(e){
        mouseX = e.pageX - $('#game').offset().left;
        mouseY = e.pageY - $('#game').offset().top;
    });

// cache the selector
    const cursor = $("#cursor");
    let xp = 0, yp = 0;
    const drawCursor = function(){
        xp += (mouseX - xp-25);
        yp += (mouseY - yp-25);
        cursor.css({left:xp, top:yp});

    };


    window.rInterval=function(callback,delay) {
        let dateNow = Date.now,
            requestAnimation=window.requestAnimationFrame,
            start=dateNow(),
            stop,
            intervalFunc=function() {
                dateNow()-start<delay||(start+=delay, callback());
                stop||requestAnimation(intervalFunc)
            };
        requestAnimation(intervalFunc);
        return {
            clear: function(){ stop=1 }
        }
    };
    window.rInterval(drawCursor,1);






});