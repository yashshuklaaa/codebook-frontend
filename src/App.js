import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';


function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

/*json-server data/db.json -r data/routes.json -m ./node_modules/json-server-auth --port 8000*/



