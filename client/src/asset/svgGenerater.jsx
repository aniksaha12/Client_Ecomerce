import React from 'react'


    export const generateSvg = (width, height, path) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
          {path}
        </svg>
      );
