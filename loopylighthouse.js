function loopylighthouse() {
  var num = 100
  for (num ; num <= 200; num ++) {
    if (num % 12 === 0) {
      console.log("LoopyLighthouse");
    } else if (num % 3 === 0) {
      console.log("Loopy");
    } else if (num % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(num);
    }
  }
}

loopylighthouse();