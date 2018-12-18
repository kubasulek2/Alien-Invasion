$( () => {
    let newGame = new Game();

    const cursor = {
        shot: new Audio('../music/shot.mp3'),
        reload: new Audio('../music/reload.mp3'),
        disabled: false,
        subject: '',
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

            this.subject = $('#cursor');
            newGame.game.css('cursor', 'none');
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
                this.subject.addClass("shot");
                newGame.bullets.pop();
                newGame.magazine.text(newGame.bullets.join(''));
                this.disabled = true;


                if (newGame.bullets.length === 0){

                    setTimeout(()=>{
                        this.reload.play();
                        this.subject.removeClass("shot");
                        this.subject.addClass("reload");
                        setTimeout(()=>{
                            this.subject.removeClass("reload");
                            this.disabled = false;
                            newGame.bullets = ['|','|','|','|','|','|','|','|','|','|','|','|'];
                            newGame.magazine.text(newGame.bullets.join(''));

                        },2200)
                    },550)
                } else{
                    setTimeout(()=> {
                        this.disabled = false;
                        this.subject.removeClass("shot")
                    },550)
                }
            }



        }

    };

    //cursor.clear();  zeby zatrzymac animacje






    function Game() {
        this.song = new Audio("../music/supernaturew.mp3");
        this.boxes = $('.box');
        this.magazine = $('#magazine');
        this.game = $('#game');
        this.score =$('#score');
        this.timer = $('#time');
        this.bullets = ['|','|','|','|','|','|','|','|','|','|','|','|'];
        this.points = 0;
        this.levelPoints = 0;
        this.level = 1;
        this.enemiesData = [];
        this.timeElapsed= 0;
        this.paused = false;
        this.gameOver = false;
        this.startNewGame = function () {

            this.soundtrack();
            this.game.on('click','.alien', this.killAlien);
            this.animateStart();



            setTimeout(()=>{
                this.drawEnemy();

                const id = window.setInterval(()=>{
                    if (!this.paused) {
                        let levelDuration = 40;

                        switch (this.level) {
                            case 3:
                                levelDuration = 37;
                                break;
                            case 6:
                                levelDuration = 34;
                                break;
                            case 9:
                                levelDuration = 31;
                                break;
                            case 10:
                                levelDuration = 29;
                                break;
                        }
                        this.timer.text(parseFloat(levelDuration - this.timeElapsed).toFixed(0));
                        this.timeElapsed = parseFloat((this.timeElapsed + 0.1).toFixed(2));
                        this.removeAlien();
                        !!(this.timeElapsed % 2) || this.drawEnemy();

                        if (this.timeElapsed >= levelDuration) {
                            this.levelUp()
                        }
                        if (this.gameOver){
                            clearInterval(id)
                        }
                    }
                },100);

            },3500);


        };
        this.removeAlien = function(){
            this.enemiesData.forEach((el,index)=>{
                let alien = $(el.element).find('div');
                let disappear = 3.8;

                switch (this.level) {
                    case 2:
                        disappear = 3.4;
                        break;
                    case 5:
                        disappear = 3;
                        break;
                    case 8:
                        disappear = 2.6;
                        break;
                    case 10:
                        disappear = 2.2;
                        break;
                }

                if( this.timeElapsed - el.creationTime >= disappear ){
                    alien.remove();
                    this.enemiesData.splice(index,1)
                }
            })
        };
        this.killAlien =  (e)=> {
            let alien = $(e.currentTarget);

            if (!cursor.disabled){
                $(e.currentTarget).fadeOut(400,function () {
                    alien.remove()
                });

                this.enemiesData = this.enemiesData.filter((el)=>el.element !== e.currentTarget.parentElement);
                this.points += (1000 + 100*(this.level-1) );
                this.levelPoints += (1000 + 100*(this.level-1) );
                this.score.text(this.points)

            }
        };
        this.soundtrack = function () {

            this.song.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            this.song.play()
        };
        this.enableAudioControl = function () {
            const icon = $('#options i:first-child');
            let flag = true;
            return ()=> {
               flag ? icon.addClass("fa-volume-mute") : icon.removeClass("fa-volume-mute");
                flag ? icon.removeClass("fa-volume-up") : icon.addClass("fa-volume-up");
                this.song.muted = flag;
                cursor.shot.muted = flag;
                cursor.reload.muted = flag;
                flag = !flag
            }
        };
        this.mute = this.enableAudioControl();

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
            alien.addClass(`animation${Math.ceil(Math.random()*3)}`).addClass(`level${this.level<=9 ? Math.ceil(this.level/3) : 3 }`);

            flag || this.drawEnemy()
        };
        this.levelUp = function () {
            this.boxes.empty();
            this.enemiesData.length = 0;
            this.paused = true;
            this.timeElapsed = 0;

            if(this.levelPoints >= 15000){

                this.level++;
                this.levelPoints = 0;
                $('#level').text(this.level);
                this.animateStart();
                setTimeout(()=>{
                    this.paused = false;
                    this.drawEnemy();
                }, 3500);

            }else{
                this.endGame()

            }
        };
        this.endGame = function () {
            this.gameOver = true;
            $('#container').after($('<div id="gameOver"><h1>Game<br /> Over!</h1></div>'));
            $('body').on('click', function() {
                location.reload();
            })

        };
        this.animateStart = function () {
            const countDown = $('#countDown');
            let counter = 3;
            countDown.html(`Level&nbsp;${this.level}`);

            countDown.addClass("countAnimation");

            setTimeout( ()=> {
                countDown.text(counter);
                let id = window.setInterval(()=>{
                    counter--;
                    countDown.text(counter);
                    if(counter<0){
                        countDown.text("Start");
                        if(counter<-1){
                            countDown.removeClass("countAnimation");
                            window.clearInterval(id);
                        }
                    }
                },500)
            },1000)
        }
    }

    function startGame(e){
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
        newGame.startNewGame();
        cursor.animateCursor(1);
        $(e.currentTarget).remove();
        $('#info').prepend($('<button id="pause">pause ||</button>'))

    }

    $('#start').on("click", startGame);
    $('#info').on('click', '#pause', function () {
        if ($(this).text() === 'pause ||'){

            $(this).text('Resume');
            newGame.paused = true;
            console.log(newGame.enemiesData[0].element);
            newGame.enemiesData.forEach((el)=>{
                $(el.element).find('.alien').addClass("freeze")
            })
        } else{
            $(this).text('pause ||');
            newGame.paused = false;
            newGame.enemiesData.forEach((el)=>{
                $(el.element).find('.alien').removeClass("freeze")
            })
        }
    });
    $('.fa-info').on("click", function () {
        $('.modal').css("display","flex");
        $('.modal').animate({width: "10%"},400);


    });
    $('.fa-volume-up').on('click', newGame.mute)
});
