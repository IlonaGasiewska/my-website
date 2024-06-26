import React from 'react';
import { createRoot } from 'react-dom/client';

import { Navbar } from './components/Navbar/Navbar';

const dom = document.getElementById('root') as HTMLElement;
const root = createRoot(dom);

const App: React.FC = () => (
  <div>
    <Navbar />
  </div>
);

root.render(<App />);
