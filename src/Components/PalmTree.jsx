import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../Pages/LandingPage/Home.css"; // Adjust the path as necessary

const Sketch = (p5) => {
  let baseLength = 120;
  let angle;

  p5.setup = () => {
    p5.createCanvas(300, 300); // Smaller canvas
    p5.angleMode(p5.RADIANS);
    p5.strokeCap(p5.ROUND);
  };
  
  p5.draw = () => {
    p5.clear();
  
    p5.push();
    const scaleFactor = window.innerWidth < 600 ? 0.4 : 0.5;
    p5.scale(scaleFactor);
  
    // Recenter the tree for the smaller canvas
    p5.translate(150 / scaleFactor, 295 / scaleFactor);
  
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 6, p5.PI / 7);
    drawTree(baseLength, 12);
    p5.pop();
  };
  
  function drawTree(len, weight) {
    p5.stroke("#8892b0");
    p5.strokeWeight(weight);
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);

    if (len > 10) {
      p5.push();
      p5.rotate(angle);
      drawTree(len * 0.75, weight * 0.6);
      p5.pop();

      p5.push();
      p5.rotate(-angle);
      drawTree(len * 0.75, weight * 0.6);
      p5.pop();
    } else {
      drawLeaf(p5);
    }
  }

  function drawLeaf(p5) {
    const size = 6;
    p5.noStroke();
    p5.fill("#64ffda");
    p5.ellipse(0, 0, size, size);
  }
};

const SamuraiTree = () => (
  <div id="samurai-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default SamuraiTree;
