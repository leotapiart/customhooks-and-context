import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

const aButtonClass =
  "rounded-lg px-3 py-2 font-medium text-slate-400 hover:bg-slate-100 hover:text-slate-900";

function App() {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col items-center justify-center bg-bgheader p-8 text-lg text-white">
        <nav className="flex justify-center space-x-4">
          <Link to="/gif/cat" className={aButtonClass}>
            GATOS
          </Link>
          <Link to="/gif/dog" className={aButtonClass}>
            PERROS
          </Link>
          <Link to="/gif/panda" className={aButtonClass}>
            PANDAS
          </Link>
        </nav>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </main>
    </div>
  );
}

export default App;

/*
<PageHead />
      <Header />
      <Main>
        <ContentSection />
        <Sidebar />
      </Main>
      <Footer />
*/
