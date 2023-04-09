import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ArmorList } from './armors/ArmorList';
import { BrigadeDetailFactory } from './brigades/BrigadeDetail/BrigadeDetailFactory';
import { BrigadeFactory } from './brigades/BrigadeFactory';
import { CampaignDetailFactory } from './campaigns/CampaignDetailFactory';
import { Layout } from './core/Layout';
import { HunterManagement } from './hunters/HunterManagement';
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
        element: BrigadeFactory.create(),
      },
      {
        path: '/brigades/:brigadeId',
        element: BrigadeDetailFactory.create(),
      },
      {
        path: '/campaigns/:campaignId',
        element: CampaignDetailFactory.create(),
      },
      {
        path: '/campaigns/:campaignId/hunters/:hunterId',
        element: <HunterManagement />,
      },
      {
        path: '/inventory',
        element: <InventoryList />,
      },
      {
        path: '/campaigns/:campaignId/hunters/:hunterId/armors',
        element: <ArmorList />,
      },
      {
        path: '/campaigns/:campaignId/hunters/:hunterId/weapons',
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
