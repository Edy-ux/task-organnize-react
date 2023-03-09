import ProvideMain  from '_common/layouts/MainLayout/context/MainLayoutContext';
import MainRoutes from './main.routes';

function App() {
  return (
    <>
      <ProvideMain >
        <MainRoutes />
      </ProvideMain>

    </>
  );
}

export default App;
