$(()=>{const t=new Audio("../music/Quirky-Action2.mp3"),s=$("#game");let e;t.addEventListener("ended",function(){this.currentTime=0,this.play()},!1);const i={shot:new Audio("../music/shot.mp3"),disabled:!1,subject:$("#cursor"),mouseX:0,mouseY:0,xPos:0,yPos:0,clear:"",drawCursor:function(){this.xPos+=this.mouseX-this.xPos-25,this.yPos+=this.mouseY-this.yPos-25,this.subject.css({left:this.xPos,top:this.yPos})},animateCursor:function(t){let s,e=Date.now,o=window.requestAnimationFrame,n=e(),a=()=>{e()-n<t||(n+=t,i.drawCursor()),s||o(a)};return o(a),this.clear=function(){s=1}},handleClick:function(){this.disabled||(this.shot.play(),this.subject.addClass("reload")),this.disabled=!0,window.setTimeout(()=>{this.disabled=!1,this.subject.removeClass("reload")},1500)}};function o(){this.level=1,this.enemies=[],this.startNewGame=function(){},this.levelUp=function(){},this.animateStart=function(){const t=$("#countDown");let s=3;t.addClass("countAnimation");let e=window.setInterval(()=>{s--,t.text(s),s<0&&(t.text("Start"),s<-1&&(t.text("3"),t.removeClass("countAnimation"),window.clearInterval(e)))},500)}}i.animateCursor(1),s.on("mousemove",function(t){i.mouseX=t.pageX-s.offset().left,i.mouseY=t.pageY-s.offset().top}),s.on("mouseenter",function(){i.subject.css("display","block")}),s.on("mouseleave",function(){i.subject.removeAttr("style")}),s.on("click",()=>{i.handleClick()}),$("#start").on("click",()=>{(e=new o).animateStart(),$(".alien").addClass("start")}),$(".alien").on("click",function(t){i.disabled||$(this).fadeOut(400,()=>{this.remove()})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwic291bmR0cmFjayIsIkF1ZGlvIiwiZ2FtZSIsIm5ld0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwidGhpcyIsImN1cnJlbnRUaW1lIiwicGxheSIsInNob3QiLCJkaXNhYmxlZCIsInN1YmplY3QiLCJtb3VzZVgiLCJtb3VzZVkiLCJ4UG9zIiwieVBvcyIsImNsZWFyIiwiZHJhd0N1cnNvciIsImNzcyIsImxlZnQiLCJ0b3AiLCJhbmltYXRlQ3Vyc29yIiwicmVxdWVzdEFuaW1hdGlvbiIsImRhdGVOb3ciLCJzdGFydCIsInN0b3AiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnRlcnZhbEZ1bmMiLCJkZWxheSIsImN1cnNvciIsImhhbmRsZUNsaWNrIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJsZXZlbFVwIiwiYW5pbWF0ZVN0YXJ0IiwiZW5lbWllcyIsImNvdW50RG93biIsInN0YXJ0TmV3R2FtZSIsImNvdW50ZXIiLCJjbGVhckludGVydmFsIiwidGV4dCIsIkdhbWUiLCJpZCIsImUiLCJwYWdlWSIsIm9mZnNldCIsInJlbW92ZUF0dHIiLCJvbiIsImZhZGVPdXQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFHLEtBQ0MsTUFBTUMsRUFBYSxJQUFJQyxNQUFNLCtCQUN2QkMsRUFBT0gsRUFBRSxTQUNmLElBQUlJLEVBQ0pILEVBQVdJLGlCQUFpQixRQUFTLFdBQ2pDQyxLQUFLQyxZQUFjLEVBQ25CRCxLQUFLRSxTQUNOLEdBSUNDLE1BQUFBLEVBQVVQLENBQ1ZRLEtBQUFBLElBQVVSLE1BRkMscUJBR1hTLFVBQVNYLEVBQ1RZLFFBSldaLEVBQUEsV0FLWGEsT0FBUSxFQUNSQyxPQU5XLEVBT1hDLEtBQU0sRUFDTkMsS0FBQUEsRUFDQUMsTUFBQUEsR0FDSUEsV0FBS0gsV0FDTFIsS0FBS1MsTUFBU1QsS0FBS08sT0FBU1AsS0FBS1MsS0FBbkIsR0FDZFQsS0FBS0ssTUFBUU8sS0FBS0MsT0FBTWIsS0FBS1EsS0FBTU0sR0FaNUJkLEtBQUFLLFFBQUFPLElBQUEsQ0FBQUMsS0FBQWIsS0FBQVEsS0FBQU0sSUFBQWQsS0FBQVMsUUFnQlBNLGNBQ0lDLFNBQUFBLEdBREosSUFLUUMsRUFISkMsRUFBTUQsS0FBQUEsSUFDTkUsRUFISkMsT0FBQUMsc0JBSUlDLEVBQUFBLElBRUlILEVBQU1ILEtBTmRDLElBQUFDLEVBQUFLLElBQUFMLEdBQUFLLEVBQUFDLEVBQUFiLGNBUUFLLEdBQUFBLEVBQUFNLElBQ3dDLE9BQVJILEVBQUFHLEdBQWhDdEIsS0FBQVUsTUFBQSxXQUFBUyxFQUFBLElBRUpNLFlBQWEsV0FDSnpCLEtBQUtJLFdBQ05KLEtBQUtHLEtBQUtELE9BQ1ZGLEtBQUtLLFFBQVFxQixTQUFTLFdBSzFCTixLQUFBQSxVQUFPTyxFQUNIUCxPQUFBTyxXQUFBLEtBQ0EzQixLQUFLSyxVQUFRdUIsRUFDZjVCLEtBSEZLLFFBQUF1QixZQUFBLFdBSUgsUUErQkQsU0FBS0MsSUFHTDdCLEtBQUs4QixNQUFBQSxFQUNEOUIsS0FBQStCLFFBQU1DLEdBQ05oQyxLQUFBaUMsYUFBQSxhQUdJQyxLQUFBQSxRQUFBQSxhQUdJRixLQUFBQSxhQUFBQSxXQUNBLE1BQUFBLEVBQUdFLEVBQUFBLGNBQ0NGLElBQUFBLEVBQUFBLEVBQ0FBLEVBQUFBLFNBQUFBLGtCQUNBWixJQUFBQSxFQUFBQSxPQUFBQSxZQUFPZSxLQUVWRCxJQUVKRixFQUFBSSxLQUFBRixHQVpMQSxFQUFBLElBSkpGLEVBQUFJLEtBQUEsU0FtQkhGLEdBQUEsSUFUbUJGLEVBQVVJLEtBQUssS0FhcEJKLEVBQWFKLFlBQUEsa0JBQ1ZTLE9BQWRGLGNBQUFHLE1BREosTUFyREFkLEVBQUFULGNBQUEsR0FJSVMsRUFBQUEsR0FBQUEsWUFBZ0JlLFNBQVUxQyxHQUMxQjJCLEVBQU9qQixPQUFTZ0MsRUFBRUMsTUFBUTNDLEVBQUs0QyxTQUFTM0IsS0FGNUNVLEVBQUFqQixPQUFBZ0MsRUFBQUMsTUFBQTNDLEVBQUE0QyxTQUFBM0IsTUFLSVUsRUFBQUEsR0FBQUEsYUFBQSxXQURKQSxFQUFBbkIsUUFBQU8sSUFBQSxVQUFBLFdBS0lZLEVBQUFBLEdBQUFBLGFBQWVrQixXQURuQmxCLEVBQUFuQixRQUFBcUMsV0FBQSxXQUlJbEIsRUFBQUEsR0FBQUEsUUFBT0MsS0FEWEQsRUFBQUMsZ0JBbkVKL0IsRUFBQSxVQUFBaUQsR0FBQSxRQUFBLE1BMkdRN0MsRUFBVSxJQUFJdUMsR0FDTlAsZUFDUnBDLEVBQUUsVUFBVWdDLFNBQVMsV0FJekJoQyxFQUFFLFVBQVVpRCxHQUFHLFFBQVEsU0FBcUJKLEdBQ3BDZixFQUFPcEIsVUFBU1YsRUFBRU0sTUFBTTRDLFFBQVEsSUFBSSxLQUNwQzVDLEtBQUs2QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCAoKSA9PiB7XG4gICAgY29uc3Qgc291bmR0cmFjayA9IG5ldyBBdWRpbygnLi4vbXVzaWMvUXVpcmt5LUFjdGlvbjIubXAzJyk7XG4gICAgY29uc3QgZ2FtZSA9ICQoJyNnYW1lJyk7XG4gICAgbGV0IG5ld0dhbWU7XG4gICAgc291bmR0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfSwgZmFsc2UpO1xuXG5cbiAgICBjb25zdCBjdXJzb3IgPSB7XG4gICAgICAgIHNob3Q6IG5ldyBBdWRpbygnLi4vbXVzaWMvc2hvdC5tcDMnKSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBzdWJqZWN0OiAkKCcjY3Vyc29yJyksXG4gICAgICAgIG1vdXNlWDogMCxcbiAgICAgICAgbW91c2VZOiAwLFxuICAgICAgICB4UG9zOiAwLFxuICAgICAgICB5UG9zOiAwLFxuICAgICAgICBjbGVhcjogJycsXG4gICAgICAgIGRyYXdDdXJzb3I6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnhQb3MgKz0gKHRoaXMubW91c2VYIC0gdGhpcy54UG9zLTI1KTtcbiAgICAgICAgICAgIHRoaXMueVBvcyArPSAodGhpcy5tb3VzZVkgLSB0aGlzLnlQb3MtMjUpO1xuICAgICAgICAgICAgdGhpcy5zdWJqZWN0LmNzcyh7bGVmdDogdGhpcy54UG9zLCB0b3A6dGhpcy55UG9zfSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZUN1cnNvcjogZnVuY3Rpb24oZGVsYXkpIHtcbiAgICAgICAgICAgIGxldCBkYXRlTm93ID0gRGF0ZS5ub3csXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbj13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICAgICAgICAgIHN0YXJ0PWRhdGVOb3coKSxcbiAgICAgICAgICAgICAgICBzdG9wLFxuICAgICAgICAgICAgICAgIGludGVydmFsRnVuYz0gKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVOb3coKS1zdGFydDxkZWxheXx8KHN0YXJ0Kz1kZWxheSwgIGN1cnNvci5kcmF3Q3Vyc29yKCkpO1xuICAgICAgICAgICAgICAgICAgICBzdG9wfHxyZXF1ZXN0QW5pbWF0aW9uKGludGVydmFsRnVuYylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbihpbnRlcnZhbEZ1bmMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpeyBzdG9wPTEgfTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0LmFkZENsYXNzKFwicmVsb2FkXCIpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdC5yZW1vdmVDbGFzcyhcInJlbG9hZFwiKVxuICAgICAgICAgICAgfSwxNTAwKVxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIGN1cnNvci5hbmltYXRlQ3Vyc29yKDEpO1xuICAgIC8vY3Vyc29yLmNsZWFyKCk7ICB6ZWJ5IHphdHJ6eW1hYyBhbmltYWNqZVxuXG5cbiAgICBnYW1lLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY3Vyc29yLm1vdXNlWCA9IGUucGFnZVggLSBnYW1lLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIGN1cnNvci5tb3VzZVkgPSBlLnBhZ2VZIC0gZ2FtZS5vZmZzZXQoKS50b3A7XG4gICAgfSk7XG4gICAgZ2FtZS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3Vyc29yLnN1YmplY3QuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG4gICAgfSk7XG5cbiAgICBnYW1lLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnNvci5zdWJqZWN0LnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICB9KTtcbiAgICBnYW1lLm9uKCdjbGljaycsICgpPT57XG4gICAgICAgIGN1cnNvci5oYW5kbGVDbGljaygpO1xuXG4gICAgfSk7XG5cblxuXG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxldmVsVXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hbmltYXRlU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudERvd24gPSAkKCcjY291bnREb3duJyk7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDM7XG4gICAgICAgICAgICBjb3VudERvd24uYWRkQ2xhc3MoXCJjb3VudEFuaW1hdGlvblwiKTtcbiAgICAgICAgICAgIGxldCBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBjb3VudERvd24udGV4dChjb3VudGVyKTtcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyPDApe1xuICAgICAgICAgICAgICAgICAgICBjb3VudERvd24udGV4dChcIlN0YXJ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihjb3VudGVyPC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bi50ZXh0KFwiM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bi5yZW1vdmVDbGFzcyhcImNvdW50QW5pbWF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sNTAwKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgICQoJyNzdGFydCcpLm9uKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgbmV3R2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIG5ld0dhbWUuYW5pbWF0ZVN0YXJ0KCk7XG4gICAgICAgICQoJy5hbGllbicpLmFkZENsYXNzKFwic3RhcnRcIik7XG5cbiAgICAgICAgLy9zb3VuZHRyYWNrLnBsYXkoKVxuICAgIH0pO1xuICAgICQoJy5hbGllbicpLm9uKCdjbGljaycsZnVuY3Rpb24gZGV0ZWN0QWxpZW4oZSkge1xuICAgICAgICBpZighY3Vyc29yLmRpc2FibGVkKSQodGhpcykuZmFkZU91dCg0MDAsKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KTsiXX0=
