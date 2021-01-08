import { ReducerButtons } from "./components/ReducerButtons";
import { AppProvider } from "./utils/AppState";


function App() {
  return (
    <>
    <AppProvider>
      <ReducerButtons/>
    </AppProvider>
    </>
  );
}

export default App;
