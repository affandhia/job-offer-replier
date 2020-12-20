<script context="module">
  let mounted = false;
  export function drag(node, draggableElement) {
    let x;
    let y;

    function touchHandler(event) {
        var touches = event.changedTouches,
            first = touches[0],
            type = "";
        switch(event.type)
        {
            case "touchstart": type = "mousedown"; break;
            case "touchmove":  type = "mousemove"; break;        
            case "touchend":   type = "mouseup";   break;
            default:           return;
        }

        // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
        //                screenX, screenY, clientX, clientY, ctrlKey, 
        //                altKey, shiftKey, metaKey, button, relatedTarget);

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                                      first.screenX, first.screenY, 
                                      first.clientX, first.clientY, false, 
                                      false, false, false, 0/*left*/, null);

        first.target.dispatchEvent(simulatedEvent);
        event.preventDefault();
    }

    function handleMousedown(event) {
      x = event.clientX;
      y = event.clientY;

      node.dispatchEvent(new CustomEvent('panstart', {
        detail: { x, y }
      }));

      window.addEventListener('mousemove', handleMousemove);
      window.addEventListener('mouseup', handleMouseup);
      window.addEventListener('touchmove', touchHandler);
      window.addEventListener('touchend', touchHandler);
    }

    function handleMousemove(event) {
      const dx = event.clientX - x;
      const dy = event.clientY - y;
      x = event.clientX;
      y = event.clientY;

      node.dispatchEvent(new CustomEvent('panmove', {
        detail: { x, y, dx, dy }
      }));
    }

    function handleMouseup(event) {
      x = event.clientX;
      y = event.clientY;

      node.dispatchEvent(new CustomEvent('panend', {
        detail: { x, y }
      }));

      window.removeEventListener('mousemove', handleMousemove);
      window.removeEventListener('mouseup', handleMouseup);
      window.removeEventListener('touchmove', touchHandler);
      window.removeEventListener('touchend', touchHandler);
    }

    node.addEventListener('mousedown', handleMousedown);
    node.addEventListener('touchstart', touchHandler);

    return {
      destroy() {
        node.removeEventListener('mousedown', handleMousedown);
        node.removeEventListener('touchstart', touchHandler);
      }
    };
  }
</script>