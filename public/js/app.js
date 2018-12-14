$(()=>{let e=new function(){this.boxes=$(".box"),this.game=$("#game"),this.score=$("#score"),this.points=0,this.level=1,this.enemiesData=[],this.timeElapsed=0,this.paused=!1,this.gameOver=!1,this.startNewGame=function(){this.game.on("click",".alien",this.killAlien),this.animateStart(),setTimeout(()=>{this.drawEnemy();const e=window.setInterval(()=>{this.paused||(this.timeElapsed=parseFloat((this.timeElapsed+.1).toFixed(2)),this.timeElapsed%3||this.drawEnemy(),this.removeAlien(),this.timeElapsed>=4&&this.levelUp(),this.gameOver&&clearInterval(e))},100)},3e3)},this.removeAlien=function(){this.enemiesData.forEach((e,t)=>{let s=$(e.element).find("div");this.timeElapsed-e.creationTime>=5&&(s.remove(),this.enemiesData.splice(t,1))})},this.killAlien=(e=>{let s=$(e.currentTarget);t.disabled||($(e.currentTarget).fadeOut(400,function(){s.remove()}),this.enemiesData=this.enemiesData.filter(t=>t.element!==e.currentTarget.parentElement),this.points+=1e3,this.score.text(this.points))}),this.soundtrack=function(){const e=new Audio("../music/supernaturew.mp3");e.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),e.play()},this.drawEnemy=function(){let e=$('<div class=\'alien\'><img src="images/alien.png" alt=""></div>'),t=!1,s=Math.floor(15*Math.random());e.find("img").attr("draggable","false"),15!==this.boxes.find(".alien").length&&(this.boxes.each((i,a)=>{i===s&&0===$(a).has(".alien").length&&($(a).append(e),t=!0,this.enemiesData.push({location:i,element:a,creationTime:this.timeElapsed}))}),e.addClass(`animation${Math.ceil(3*Math.random())}`).addClass(`level${this.level}`),t||this.drawEnemy())},this.levelUp=function(){this.boxes.empty(),this.enemiesData.length=0,this.paused=!0,this.timeElapsed=-3,this.score.text()>=1e3?(this.score.text("0"),this.level++,$("#level").text(this.level),this.animateStart(),setTimeout(this.paused=!1,2500)):this.endGame()},this.endGame=function(){this.gameOver=!0,$("#container").after($('<div id="gameOver"><h1>Game<br /> Over!</h1></div>')),$("body").on("click",function(){location.reload()})},this.animateStart=function(){const e=$("#countDown");let t=4;e.html(`Level&nbsp;${this.level}`),e.addClass("countAnimation");let s=window.setInterval(()=>{t--,e.text(t),t<0&&(e.text("Start"),t<-1&&(e.removeClass("countAnimation"),window.clearInterval(s)))},500)}};const t={shot:new Audio("../music/shot.mp3"),disabled:!1,subject:$("#cursor"),mouseX:0,mouseY:0,xPos:0,yPos:0,clear:"",drawCursor:function(){this.xPos+=this.mouseX-this.xPos-25,this.yPos+=this.mouseY-this.yPos-25,this.subject.css({left:this.xPos,top:this.yPos})},animateCursor:function(e){let s,i=Date.now,a=window.requestAnimationFrame,n=i(),o=()=>{i()-n<e||(n+=e,t.drawCursor()),s||a(o)};return a(o),this.clear=function(){s=1}},handleClick:function(){this.disabled||(this.shot.play(),this.subject.addClass("reload")),this.disabled=!0,window.setTimeout(()=>{this.disabled=!1,this.subject.removeClass("reload")},1500)}};t.animateCursor(1),e.game.on("mousemove",function(s){t.mouseX=s.pageX-e.game.offset().left,t.mouseY=s.pageY-e.game.offset().top}),e.game.on("mouseenter",function(){t.subject.css("display","block")}),e.game.on("mouseleave",function(){t.subject.removeAttr("style")}),e.game.on("click",()=>{t.handleClick()}),$("#start").on("click",()=>{e.startNewGame()})});
//# sourceMappingURL=app.js.map
