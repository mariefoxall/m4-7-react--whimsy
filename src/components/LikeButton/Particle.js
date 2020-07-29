import React from "react";

import { useSpring, animated } from "react-spring";
import ScaleIn from "./ScaleIn";

const Particle = ({ angle, distance, children }) => {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const style = useSpring({
    transform: "scale(40)",
    // transform: `translate(${x}, ${y})`,
    from: {
      transform: "scale(.5)",

      //   transform: "translate(0,0)",
    },
    config: {
      tension: 200,
      friction: 10,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default Particle;
