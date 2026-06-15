/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';
import { Team } from './pages/Team';
import { Curriculum } from './pages/Curriculum';
import { Advocacy } from './pages/Advocacy';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-accent-base font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/advocacy" element={<Advocacy />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
