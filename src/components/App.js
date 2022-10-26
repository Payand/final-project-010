import Header from "./HeaderComponents/Header";
import Main from "./MainComponents/Main";
import { api } from "../Api";

const App = () => {
  return (
    <>
      <header className="linear">
        <Header header={api.Header} />
      </header>

      <main>
        <Main main={api.movies} />
      </main>
    </>
  );
};
export default App;
