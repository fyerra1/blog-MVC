module.exports = {
  get_icon: () => {
    const randomNum = Math.random();
    let icon = "/images/Banana.png";

    if (randomNum > 0.9) {
      icon = "/images/Carrot.png";
    } else if (randomNum > 0.8) {
      icon = "/images/Garlic.png";
    } else if (randomNum > 0.7) {
      icon = "/images/Lemon.png";
    } else if (randomNum > 0.6) {
      icon = "/images/Lettuce.png";
    } else if (randomNum > 0.5) {
      icon = "/images/Mushroom.png";  
    } else if (randomNum > 0.4) {
      icon = "/images/RedOnion.png"; 
    } else if (randomNum > 0.3) {
      icon = "/images/RedPepper.png"; 
    } else if (randomNum > 0.2) {
      icon = "/images/Tomato.png";  
    } else if (randomNum > 0.1) {
      icon = "/images/Watermelon.png";}       

    return icon;
    
  },
  
};
