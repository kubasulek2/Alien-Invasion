$( () => {
    const soundtrack = new Audio('../music/Quirky-Action2.mp3');
    const game = $('#game');
    let newGame;
    soundtrack.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


    const cursor = {
        shot: new Audio('../music/shot.mp3'),
        disabled: false,
        subject: $('#cursor'),
        mouseX: 0,
        mouseY: 0,
        xPos: 0,
        yPos: 0,
        clear: '',
        drawCursor: function(){
            this.xPos += (this.mouseX - this.xPos-25);
            this.yPos += (this.mouseY - this.yPos-25);
            this.subject.css({left: this.xPos, top:this.yPos});

        },
        animateCursor: function(delay) {
            let dateNow = Date.now,
                requestAnimation=window.requestAnimationFrame,
                start=dateNow(),
                stop,
                intervalFunc= ()=> {
                    dateNow()-start<delay||(start+=delay,  cursor.drawCursor());
                    stop||requestAnimation(intervalFunc)
                };
            requestAnimation(intervalFunc);
            return this.clear = function(){ stop=1 };
        },
        handleClick: function(){
            if (!this.disabled){
                this.shot.play();
                this.subject.addClass("reload");
            }


            this.disabled = true;
            window.setTimeout(()=> {
                this.disabled = false;
                this.subject.removeClass("reload")
            },1500)
        }

    };
    cursor.animateCursor(1);
    //cursor.clear();  zeby zatrzymac animacje


    game.on('mousemove', function(e){
        cursor.mouseX = e.pageX - game.offset().left;
        cursor.mouseY = e.pageY - game.offset().top;
    });
    game.on('mouseenter', function () {
        cursor.subject.css("display","block");
    });

    game.on('mouseleave',function () {
        cursor.subject.removeAttr('style')
    });
    game.on('click', ()=>{
        cursor.handleClick();

    });



    function Game() {
        this.level = 1;
        this.enemies = [];
        this.startNewGame = function () {

        };
        this.levelUp = function () {

        };
        this.animateStart = function () {
            const countDown = $('#countDown');
            let counter = 3;
            countDown.addClass("countAnimation");
            let id = window.setInterval(()=>{
                counter--;
                countDown.text(counter);
                if(counter<0){
                    countDown.text("Start");
                    if(counter<-1){
                        countDown.text("3");
                        countDown.removeClass("countAnimation");
                        window.clearInterval(id);

                    }

                }
            },500)
        }
    }



    $('#start').on("click", ()=>{
        newGame = new Game();
        newGame.animateStart();
        $('.alien').addClass("start");

        //soundtrack.play()
    });
    $('.alien').on('click',function detectAlien(e) {
        if(!cursor.disabled)$(this).fadeOut(400,()=>{
            this.remove();
        });
    });

});