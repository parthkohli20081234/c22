function bounceOf(){
    if (r2.x - r1.x < r1.width/2 + r2.width/2
      && r1.x - r2.x < r1.width/2 + r2.width/2) {
        r2.velocityX = r2.velocityX * (-1);
        r1.velocityX = r1.velocityX * (-1);
  }
  if (r2.y - r1.y < r2.height/2 + r2.height/2
    && r1.y - r2.y < r1.height/2 + r2.height/2){
      r2.velocityY = r2.velocityY * (-1);
      r1.velocityY = r1.velocityY * (-1);
  }
  }