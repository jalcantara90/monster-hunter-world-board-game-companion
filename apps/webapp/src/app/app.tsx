import { Layout } from './core/Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrigadeList } from './brigades/BrigadeList';
import { CampaignList } from './campaigns/CampaignList';
import { HunterList } from './hunters/HunterList';
import { InventoryList } from './inventory/InventoryList';
import { ArmorList } from './armors/ArmorList';
import { WeaponList } from './weapons/WeaponList';
import { MaterialList } from './materials/MaterialList';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <BrigadeList />,
  },
  {
    path: '/campaigns',
    element: <CampaignList />,
  },
  {
    path: '/hunters',
    element: <HunterList />,
  },
  {
    path: '/inventory',
    element: <InventoryList />,
  },
  {
    path: '/armors',
    element: <ArmorList />,
  },
  {
    path: '/weapons',
    element: <WeaponList />,
  },
  {
    path: '/material',
    element: <MaterialList />,
  },
]);

export function App() {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
}

export default App;
