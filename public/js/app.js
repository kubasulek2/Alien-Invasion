$(()=>{const t=new Audio("../music/Quirky-Action2.mp3"),s=$("#game");let e;t.addEventListener("ended",function(){this.currentTime=0,this.play()},!1);const o=$("#cursor"),i={shot:new Audio("../music/shot.mp3"),disabled:!1,subject:$("#cursor"),mouseX:0,mouseY:0,xPos:0,yPos:0,clear:"",drawCursor:function(){this.xPos+=this.mouseX-this.xPos-25,this.yPos+=this.mouseY-this.yPos-25,this.subject.css({left:this.xPos,top:this.yPos})},animateCursor:function(t){let s,e=Date.now,o=window.requestAnimationFrame,n=e(),a=()=>{e()-n<t||(n+=t,i.drawCursor()),s||o(a)};return o(a),this.clear=function(){s=1}},handleClick:function(){this.disabled||(this.shot.play(),this.subject.addClass("reload")),this.disabled=!0,window.setTimeout(()=>{this.disabled=!1,this.subject.removeClass("reload")},1500)}};function n(){this.level=1,this.enemies=[],this.startNewGame=function(){},this.levelUp=function(){},this.animateStart=function(){const t=$("#countDown");let s=3;t.addClass("countAnimation");let e=window.setInterval(()=>{s--,t.text(s),s<0&&(t.text("Start"),s<-1&&(t.text("3"),t.removeClass("countAnimation"),window.clearInterval(e)))},500)}}i.animateCursor(1),s.on("mousemove",function(t){i.mouseX=t.pageX-s.offset().left,i.mouseY=t.pageY-s.offset().top}),s.on("mouseenter",function(){o.css("display","block"),i.subject.css("display","block")}),s.on("mouseleave",function(){i.subject.removeAttr("style")}),s.on("click",()=>{i.handleClick()}),$("#start").on("click",()=>{(e=new n).animateStart()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwic291bmR0cmFjayIsIkF1ZGlvIiwiZ2FtZSIsIm5ld0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwidGhpcyIsImN1cnJlbnRUaW1lIiwicGxheSIsImN1cnNvciIsImN1cnNvcnIiLCJzaG90IiwiZGlzYWJsZWQiLCJzdWJqZWN0IiwibW91c2VYIiwibW91c2VZIiwieFBvcyIsInlQb3MiLCJjbGVhciIsImRyYXdDdXJzb3IiLCJjc3MiLCJsZWZ0IiwidG9wIiwiYW5pbWF0ZUN1cnNvciIsImRhdGVOb3ciLCJub3ciLCJpbnRlcnZhbEZ1bmMiLCJyZXF1ZXN0QW5pbWF0aW9uIiwic3RhcnQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiaGFuZGxlQ2xpY2siLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJHYW1lIiwibGV2ZWwiLCJlbmVtaWVzIiwiYW5pbWF0ZVN0YXJ0IiwiY291bnREb3duIiwiYWRkQ2xhc3MiLCJpZCIsInNldEludGVydmFsIiwiY291bnRlciIsImNsZWFySW50ZXJ2YWwiLCJ0ZXh0Iiwib24iLCJlIiwicGFnZVgiLCJvZmZzZXQiLCJwYWdlWSIsInJlbW92ZUF0dHIiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFHLEtBQ0MsTUFBTUMsRUFBYSxJQUFJQyxNQUFNLCtCQUN2QkMsRUFBT0gsRUFBRSxTQUNmLElBQUlJLEVBQ0pILEVBQVdJLGlCQUFpQixRQUFTLFdBQ2pDQyxLQUFLQyxZQUFjLEVBQ25CRCxLQUFLRSxTQUNOLEdBRUgsTUFBTUMsRUFBU1QsRUFBRSxXQUNYVSxFQUFVLENBQ1pDLEtBQU0sSUFBSVQsTUFBTSxxQkFDaEJVLFVBQVUsRUFDVkMsUUFBU2IsRUFBRSxXQUNYYyxPQUFRLEVBQ1JDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxLQUFNLEVBQ05DLE1BQU8sR0FDUEMsV0FBWSxXQUNSYixLQUFLVSxNQUFTVixLQUFLUSxPQUFTUixLQUFLVSxLQUFuQixHQUNkVixLQUFLVyxNQUFTWCxLQUFLUyxPQUFTVCxLQUFLVyxLQUFuQixHQUNkWCxLQUFLTyxRQUFRTyxJQUFJLENBQUFDLEtBQUNBLEtBQU1MLEtBQVBNLElBQWtCQSxLQUFJTCxRQUl2Q00sY0FBSUMsU0FBZUMsR0FBbkIsSUFJSUMsRUFIQUMsRUFBQUEsS0FBQUEsSUFDQUMsRUFGSkMsT0FBQUMsc0JBR0lDLEVBSEpQLElBS1FBLEVBQVVJLEtBQ1ZHLElBQU1KLEVBQUFBLElBQWlCRCxHQUFBQSxFQUF2QmhCLEVBQUFTLGNBTlJZLEdBQUFKLEVBQUFELElBU2dDSyxPQUFoQ0osRUFBT0QsR0FBeUJLLEtBQUFiLE1BQUEsV0FBQWEsRUFBQSxJQUNuQ0MsWUExQlcsV0EyQlpBLEtBQWFwQixXQUNMTixLQUFDSyxLQUFLQyxPQUNOTixLQUFLSyxRQUFLSCxTQUFWLFdBS0pGLEtBQUtNLFVBQVcsRUFDaEJpQixPQUFPSSxXQUFXLEtBQ2QzQixLQUFLTSxVQUFXLEVBQ2hCTixLQUFLTyxRQUFRcUIsWUFBWSxXQUY3QixRQXdCUCxTQUZEQyxJQUdBN0IsS0FBUzZCLE1BQU8sRUFDWjdCLEtBQUs4QixRQUFMLEdBQ0E5QixLQUFLK0IsYUFBTCxhQU9BL0IsS0FBS2dDLFFBQUFBLGFBR0RDLEtBQUFBLGFBQVVDLFdBQ1YsTUFBSUMsRUFBWUMsRUFBQUEsY0FDWkMsSUFBQUEsRUFBQUEsRUFDQUosRUFBQUEsU0FBZUksa0JBQ2YsSUFBQUYsRUFBR0UsT0FBQUEsWUFBVSxLQUNUSixJQUNBQSxFQUFHSSxLQUFBQSxHQUNDSixFQUFBQSxJQUNBQSxFQUFBQSxLQUFVTCxTQUNWTCxHQUFPZSxJQUVWTCxFQUFBTSxLQUFBLEtBRUpOLEVBQUFMLFlBQUEsa0JBWkxMLE9BQUFlLGNBQUFILE1Bb0JKckMsTUFuREpNLEVBQVFhLGNBQWMsR0FJdEJwQixFQUFLMkMsR0FBRyxZQUFhLFNBQUFDLEdBQ2pCckMsRUFBUUksT0FBU2lDLEVBQUVDLE1BQVE3QyxFQUFLOEMsU0FBUzVCLEtBQ3pDWCxFQUFRSyxPQUFTZ0MsRUFBRUcsTUFBUS9DLEVBQUs4QyxTQUFTM0IsTUFFN0NuQixFQUFLMkMsR0FBRyxhQUFjLFdBQVlyQyxFQUFBVyxJQUFBLFVBQUEsU0FBQ1gsRUFBT1csUUFBSUEsSUFBWCxVQUFBLFdBSW5DakIsRUFBSzJDLEdBQUcsYUFBYSxXQUFyQjNDLEVBQVFVLFFBQVJzQyxXQUFxQixXQUVwQmhELEVBRkQyQyxHQUFBLFFBQUEsS0FHQTNDLEVBQVE2QixnQkFtQ1JoQyxFQUFFLFVBQVU4QyxHQUFHLFFBQVMsTUFDcEIxQyxFQUFVLElBQUkrQixHQUNORyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCAoKSA9PiB7XG4gICAgY29uc3Qgc291bmR0cmFjayA9IG5ldyBBdWRpbygnLi4vbXVzaWMvUXVpcmt5LUFjdGlvbjIubXAzJyk7XG4gICAgY29uc3QgZ2FtZSA9ICQoJyNnYW1lJyk7XG4gICAgbGV0IG5ld0dhbWU7XG4gICAgc291bmR0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgY29uc3QgY3Vyc29yID0gJCgnI2N1cnNvcicpO1xuICAgIGNvbnN0IGN1cnNvcnIgPSB7XG4gICAgICAgIHNob3Q6IG5ldyBBdWRpbygnLi4vbXVzaWMvc2hvdC5tcDMnKSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBzdWJqZWN0OiAkKCcjY3Vyc29yJyksXG4gICAgICAgIG1vdXNlWDogMCxcbiAgICAgICAgbW91c2VZOiAwLFxuICAgICAgICB4UG9zOiAwLFxuICAgICAgICB5UG9zOiAwLFxuICAgICAgICBjbGVhcjogJycsXG4gICAgICAgIGRyYXdDdXJzb3I6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnhQb3MgKz0gKHRoaXMubW91c2VYIC0gdGhpcy54UG9zLTI1KTtcbiAgICAgICAgICAgIHRoaXMueVBvcyArPSAodGhpcy5tb3VzZVkgLSB0aGlzLnlQb3MtMjUpO1xuICAgICAgICAgICAgdGhpcy5zdWJqZWN0LmNzcyh7bGVmdDogdGhpcy54UG9zLCB0b3A6dGhpcy55UG9zfSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZUN1cnNvcjogZnVuY3Rpb24oZGVsYXkpIHtcbiAgICAgICAgICAgIGxldCBkYXRlTm93ID0gRGF0ZS5ub3csXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbj13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICAgICAgICAgIHN0YXJ0PWRhdGVOb3coKSxcbiAgICAgICAgICAgICAgICBzdG9wLFxuICAgICAgICAgICAgICAgIGludGVydmFsRnVuYz0gKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVOb3coKS1zdGFydDxkZWxheXx8KHN0YXJ0Kz1kZWxheSwgIGN1cnNvcnIuZHJhd0N1cnNvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcHx8cmVxdWVzdEFuaW1hdGlvbihpbnRlcnZhbEZ1bmMpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb24oaW50ZXJ2YWxGdW5jKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKXsgc3RvcD0xIH07XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3QucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdC5hZGRDbGFzcyhcInJlbG9hZFwiKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3QucmVtb3ZlQ2xhc3MoXCJyZWxvYWRcIilcbiAgICAgICAgICAgIH0sMTUwMClcbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBjdXJzb3JyLmFuaW1hdGVDdXJzb3IoMSk7XG4gICAgLy9jdXJzb3JyLmNsZWFyKCk7ICB6ZWJ5IHphdHJ6eW1hYyBhbmltYWNqZVxuXG5cbiAgICBnYW1lLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY3Vyc29yci5tb3VzZVggPSBlLnBhZ2VYIC0gZ2FtZS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICBjdXJzb3JyLm1vdXNlWSA9IGUucGFnZVkgLSBnYW1lLm9mZnNldCgpLnRvcDtcbiAgICB9KTtcbiAgICBnYW1lLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge2N1cnNvci5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgICAgICAgY3Vyc29yci5zdWJqZWN0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIH0pO1xuXG4gICAgZ2FtZS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJzb3JyLnN1YmplY3QucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgIH0pO1xuICAgIGdhbWUub24oJ2NsaWNrJywgKCk9PntcbiAgICAgICAgY3Vyc29yci5oYW5kbGVDbGljaygpXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxldmVsVXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hbmltYXRlU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudERvd24gPSAkKCcjY291bnREb3duJyk7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDM7XG4gICAgICAgICAgICBjb3VudERvd24uYWRkQ2xhc3MoXCJjb3VudEFuaW1hdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBjb3VudERvd24udGV4dChjb3VudGVyKTtcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyPDApe1xuICAgICAgICAgICAgICAgICAgICBjb3VudERvd24udGV4dChcIlN0YXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihjb3VudGVyPC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bi50ZXh0KFwiM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bi5yZW1vdmVDbGFzcyhcImNvdW50QW5pbWF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sNTAwKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgICQoJyNzdGFydCcpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgbmV3R2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIG5ld0dhbWUuYW5pbWF0ZVN0YXJ0KClcbiAgICB9KVxuXG59KTsiXX0=
