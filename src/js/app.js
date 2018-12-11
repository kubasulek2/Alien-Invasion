$( () => {
    const shot = new Audio('../music/shot.mp3');
    const soundtrack = new Audio('../music/Quirky-Action2.mp3');
    soundtrack.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    //pusc to dopiero gdy sie zaladuje, jakis check musisz zrobic;
//find mouse position within game div, put eventlisteners on it
    const cursor = $('#cursor');
    let mouseX = 0, mouseY = 0;
    let disabled = false;
    const game = $('#game');


    let xp = 0, yp = 0;
    const drawCursor = function(){
        xp += (mouseX - xp-25);
        yp += (mouseY - yp-25);
        cursor.css({left:xp, top:yp});

    };

    //cache element
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

    const handleClick = function(){
        if (!disabled){
            shot.play();
            cursor.addClass("reload")
            console.log("jestem");
        }


        disabled = true;
        window.setTimeout(function () {
            disabled = false;
            cursor.removeClass("reload")
        },1500)
    };

    window.rInterval(drawCursor,1);

    game.on('mousemove', function(e){
        mouseX = e.pageX - game.offset().left;
        mouseY = e.pageY - game.offset().top;
    });
    game.on('mouseenter', function () {cursor.css("display","block");
        cursor.css("display","block");
    });

    game.on('mouseleave',function () {
        cursor.removeAttr('style')
    });


    game.on('click', handleClick)





});