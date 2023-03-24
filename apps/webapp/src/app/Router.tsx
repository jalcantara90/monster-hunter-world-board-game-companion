import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ArmorList } from './armors/ArmorList';
import { BrigadeList } from './brigades/BrigadeList';
import { CampaignList } from './campaigns/CampaignList';
import { Layout } from './core/Layout';
import { HunterList } from './hunters/HunterList';
import { InventoryList } from './inventory/InventoryList';
import { MaterialList } from './materials/MaterialList';
import { WeaponList } from './weapons/WeaponList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
        path: '/materials',
        element: <MaterialList />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
