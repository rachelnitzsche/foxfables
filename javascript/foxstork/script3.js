(function() {
    
    var RAD2DEG = 180 / Math.PI;            
    var dial = $("#wheel");
    dial.centerX = dial.offset().left + dial.width()/2;
    dial.centerY =  dial.offset().top + dial.height()/2;
    
   
    var offset, dragging=false;
    dial.mousedown(function(e) {
      dragging = true;
      offset = Math.atan2(dial.centerY - e.pageY, e.pageX - dial.centerX);
    })
    $(document).mouseup(function() {
      dragging = false
    })
    $(document).mousemove(function(e) {
      if (dragging) { 
        
        var newOffset = Math.atan2(dial.centerY - e.pageY, e.pageX - dial.centerX);
        var r = (offset - newOffset) * RAD2DEG;
        
        dial.css('-webkit-transform', 'rotate(' + r + 'deg)');
      }
    })
    }());