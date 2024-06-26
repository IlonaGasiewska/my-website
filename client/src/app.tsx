import React from 'react';
import { createRoot } from 'react-dom/client';

const dom = document.getElementById('root')  as HTMLElement;
const root = createRoot(dom);

import { Navbar } from './components/Navbar/Navbar';

const App: React.FC = () => (
  <div>
    <Navbar/>
  </div>
);

root.render(<App />);