import React from "react";
import Typewriter from "typewriter-effect";
import profile from "../../Assets/profile.json"
function Type() {
  return (
    <Typewriter
      options={{
        strings: profile.professionalIdentities,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // textShadow: '2px 2px 4px #fff'
        // textShadow: '1px 1px 2px #fff'
        //   textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffd800, 0 0 70px #ffd800, 0 0 80px #ffd800, 0 0 100px #ffd800, 0 0 150px #ffd800'
      }}
      // style={{ color: '#ffd800' }}
      // style={{ color: '#ffd800', fontSize: '12px' }}
    />
  );
}

export default Type;
