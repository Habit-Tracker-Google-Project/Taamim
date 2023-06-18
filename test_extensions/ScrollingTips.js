function randomizeTip() { // will cycle the tips messages
    const quotes = [
      "It takes around 2 months to make a habit and up to 2 months to break one, keep up the commitment!",
<<<<<<< HEAD
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Learn as if you will live forever, live like you will die tomorrow.",
      "If you only do what you can do, you will never be more than you are now.",
      "There are no accidents",
      "The greatest victory is that which requires no battle",
      "If you know the enemy and you know yourself, you need not fear the result of a hundred battles.",
      "In the midst of chaos, there is also opportunity.",
      "All warfare is based on deception.",
      "Opportunities multiply as they are seized.",
      "You can handle anything for 10 seconds.",
      "It gets easier. Every day it gets a little easier. But you gotta do it every day - that's the hard part. But it does get easier.",
      "Sucking at something is the first step at being sorta good at something.",
      "Not everything is a lesson. Sometimes, you just fail.",
      "It is important to draw wisdom from different places. If you take it from only one place, it becomes rigid and stale.",
      "If used consistently, habit trackers have been proven to be effective at building and breaking habits."
=======
      "\'The best time to plant a tree was 20 years ago. The second best time is now\' - Chinese Proverb"
>>>>>>> 297d30cf448d914cc15d39b90a050a5d3dab2ffe
    ] // we can add more quotes later
    var text = document.getElementById("scroll-text");
    let instanceCounter = 0;
    var timer = setInterval(function() {
      if (instanceCounter==6) {
        // every 100s, text will appear and scroll for 20s
        text.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
        instanceCounter = 0;
      } else {
        text.innerHTML = " ";
      } // clears text
      instanceCounter++;
    }, 20000) // increments counter every 10s
  
  }

randomizeTip();