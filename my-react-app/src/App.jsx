const reactDecription = ["Fundamental", "Crucial", "Core"];

function getRandom(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>rEACT Essentials</h1>D
      <h1>React</h1>
      <h1>React</h1>
      <p>
        {reactDecription[getRandom(2)]} React concepts you will need for almost any app you are
        
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <h2>Time to get started!</h2>
        <h3>Hello From Vipul</h3>
        <h3>Hello From Vipul</h3>
        <h3>Hello From Vipul</h3>
      </main>
    </div>
  );
}

export default App;
