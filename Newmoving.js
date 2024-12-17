 //JavaScript 
 let interval;
 //naming the object i want to move 
 let image = document.getElementById("movableImage");
  
 function startMoving(direction){
      stopMoving();
      interval = setInterval(() => {
          
         let left = image.offsetLeft;
         let top = image.offsetTop;
    
         // which directioin i want the image to move
         if (direction === 'right') left += 5;
         if (direction === 'left') left -= 5;
         if (direction === 'up') top -= 5;
         if (direction === 'down') top += 5;
  
         // Apply new position
         image.style.left = `${left}px`;
         image.style.top = `${top}px`;
     }, 50);  
 }
  
  //function to sto the image from moving
 function stopMoving(){
  clearInterval(interval);
 }