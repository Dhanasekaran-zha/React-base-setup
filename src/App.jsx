import { AppRouter } from './router/index.jsx';
import { Loader } from '@/components/atoms/index.js';
import { ToastContainer } from 'react-toastify';
import { useApiLoading } from '@/hooks/index.js';

function App() {
  const isLoading = useApiLoading();

  return (
    <div>
      {isLoading && <Loader />}
      <ToastContainer className={'font-outfit'} autoClose={3000} />
      <AppRouter />
    </div>
  );
}

export default App;
