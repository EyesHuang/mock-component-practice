import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
          <hr/>
          <button>Click me</button>
          <p>I am Content</p>
          <hr/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
