import React from 'react';
import Module from './Module';

function ModuleList({ modules }) {
  return <div>
    <h3>Modules</h3>
    {/* yes we can map these, it's coming sooooon */}
    <Module module={modules[0]} />
    <Module module={modules[1]} />
    <Module module={modules[4]} />
  </div>
}

export default ModuleList;
