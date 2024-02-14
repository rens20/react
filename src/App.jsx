import React from 'react';
import layoutData from './json/layout.json';
import './App.css';

function App() {
  const { header, nav, main, footer } = layoutData;

  return (
    <div className="App">
      <header>
        <h1>{header.title}</h1>
      </header>
      <nav>
        <ul>
          {nav.links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        {main.sections.map((section, index) => (
          <section key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
      <footer>
        <p>{footer.copyright}</p>
      </footer>
    </div>
  );
}

export default App;
