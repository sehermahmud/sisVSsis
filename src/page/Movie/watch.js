import React from 'react';
import ReactPlayer from 'react-player';

import Movie from './ui/data';

export default function watch(props, id) {
  const { movie } = Movie;
  return (
    <div>
      <ReactPlayer width="700px" height="400px" controls url={movie} />
    </div>
  );
}
