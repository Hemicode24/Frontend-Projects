const timing = {
    duration: 10000,
    iterations: "Infinity"
  };
  
  function createBubbleKeyframes(scale, shift, isStable) {
    const newKeyframes = [];
    for (let i = 0; i < 4; i++) {
      const currentScale = (() => {
        if (isStable || scale === 1) {
          return scale;
        }
        return i % 2 === scale ? 1 : scale;
      })();
  
      newKeyframes.push({
        bottom: `${i * 50 - ((i * shift) % 2 == 0 - 1)}vh`,
        transform: `scale( ${currentScale})`,
        margin: `0  0  0 ${shift}rem`
      });
    }
    return newKeyframes;
  }
  
  function addBubbles(quantity) {
    const firstBubbles = document.getElementById("firstBubble");
    for (let i = 0; i < quantity; i++) {
      let newBubble = document.createElement("div");
      newBubble.classList.add("cartoon-bubble");
      let bubbleChild = document.createElement("div");
      newBubble.append(bubbleChild);
      firstBubbles.parentNode.insertBefore(newBubble, firstBubbles);
    }
    return;
  }
  
  function animate() {
    addBubbles(8);
  
    const allBubbles = document.querySelectorAll(".cartoon-bubble");
    console.log(allBubbles.length);
  
    for (let i = 1; i < allBubbles.length; i++) {
      const scale = 0.25 * Math.ceil((i * i * i) % 4) + 1;
      const rotation = i % 3 === 0 || scale === 1.75 ? 2.7 : 1.01;
      const bubbleAnimation = createBubbleKeyframes(scale, rotation);
      allBubbles[i].animate(bubbleAnimation, {
        ...timing,
        delay: i * 4123,
        duration: 7000 + (i % 4) * 1000
      });
    }
  }
  
  setTimeout(() => {
    animate();
  }, 400);
  