import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Contoh from "./components/Contoh";

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
      <Contoh />
    </QueryClientProvider>
  );
}

export default App;
