import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contoh from "./components/Contoh";
import DetailContoh from "./components/DetailContoh";
import NotFound from "./views/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" Component={Contoh} />
          <Route path="/anime/:animeId" Component={DetailContoh} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
