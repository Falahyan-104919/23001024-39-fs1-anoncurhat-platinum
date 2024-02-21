import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Home from './pages/Home';
import PostListContainer from './features/post-comment/PostListContainer';
import CurhatanListContainer from './features/curhatan-list/CurhatanListContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CurhatanListContainer />} />
          <Route path="post/:id" element={<PostListContainer />} />
          <Route path="newest" element={<CurhatanListContainer />} />
          <Route path="hottest" element={<CurhatanListContainer />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
