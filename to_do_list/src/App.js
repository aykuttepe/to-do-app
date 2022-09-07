
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./content";
import { TodoProvider } from "./contexts/ToDoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header></Header>
        <Content></Content>
      </section>
      <Footer></Footer>
    </TodoProvider>
  );
}

export default App;
