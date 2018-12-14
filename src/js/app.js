$( () => {
    let newGame = new Game();

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


    newGame.game.on('mousemove', function(e){
        cursor.mouseX = e.pageX - newGame.game.offset().left;
        cursor.mouseY = e.pageY - newGame.game.offset().top;
    });
    newGame.game.on('mouseenter', function () {
        cursor.subject.css("display","block");
    });

    newGame.game.on('mouseleave',function () {
        cursor.subject.removeAttr('style')
    });
    newGame.game.on('click', ()=>{
        cursor.handleClick();

    });



    function Game() {
        this.boxes = $('.box');
        this.game = $('#game');
        this.score =$('#score');
        this.points = 0;
        this.level = 1;
        this.enemiesData = [];
        this.timeElapsed= 0;
        this.paused = false;
        this.gameOver = false;
        this.startNewGame = function () {
            let paused = false;
            //this.soundtrack();
            this.game.on('click','.alien', this.killAlien);
            this.animateStart();

            setTimeout(()=>{
                this.drawEnemy();

                const id = window.setInterval(()=>{
                    if (!this.paused) {
                        this.timeElapsed = parseFloat((this.timeElapsed + 0.1).toFixed(2));
                        !!(this.timeElapsed % 3) || this.drawEnemy();
                        this.removeAlien();

                        if (this.timeElapsed >= 4) {
                            this.levelUp()
                        }
                        if (this.gameOver){
                            clearInterval(id)
                        }
                    }
                },100);

            },2500);


        };
        this.removeAlien = function(){
            this.enemiesData.forEach((el,index)=>{
                let alien = $(el.element).find('div');
                if( this.timeElapsed - el.creationTime >= 5 ){
                    alien.remove();
                    this.enemiesData.splice(index,1)
                    }


                //console.log(this.timeElapsed,  el.creationTime);
                /*this.enemiesData = this.enemiesData.filter( el => {
                    if( this.timeElapsed - el.creationTime <= 3){
                        return el
                    }
                } )*/
            })
        };
        this.killAlien =  (e)=> {
            let alien = $(e.currentTarget);

            if (!cursor.disabled){
                $(e.currentTarget).fadeOut(400,function () {
                    alien.remove()
                });

                this.enemiesData = this.enemiesData.filter((el)=>el.element !== e.currentTarget.parentElement);
                this.points += 1000;
                this.score.text(this.points)

            }
        };
        this.soundtrack = function () {
            const song = new Audio("../music/supernaturew.mp3");
            song.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            song.play()
        };
        this.drawEnemy = function () {
            let alien = $("<div class='alien'><img src=\"images/alien.png\" alt=\"\"></div>");
            let flag = false;
            let enemyLocation = Math.floor(Math.random()*15);
            alien.find("img").attr("draggable", 'false');

            if( this.boxes.find(".alien").length === 15){ return }

            this.boxes.each((index,el)=>{
                if(index === enemyLocation && $(el).has('.alien').length === 0){
                    $(el).append(alien);
                    flag = true;
                    this.enemiesData.push({location:index, element:el, creationTime: this.timeElapsed})
                }
            });
            alien.addClass(`animation${Math.ceil(Math.random()*3)}`).addClass(`level${this.level}`);

            flag || this.drawEnemy()
        };
        this.levelUp = function () {
            this.boxes.empty();
            this.enemiesData.length = 0;
            this.paused = true;

            if(this.score.text() > 2000){
                this.score.text("0");
                this.level++;
                $('#level').text(this.level);
                this.animateStart();
                setTimeout(this.paused = false, 2500);

            }else{
                this.endGame()

            }
        };
        this.endGame = function () {
            this.gameOver = true;

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
        newGame.startNewGame();
    });

});
