import React from 'react';
import ServiceProvider from '../ServiceProvider';

export interface props {
  serviceProvider: ServiceProvider;
  entityId: string;
}

const App = ({ serviceProvider, entityId }: props) => {
  return (
    <div>
      <h1>HEY THERE new</h1>
    </div>
  )
}

export default App; 
