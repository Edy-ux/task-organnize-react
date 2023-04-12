/* eslint-disable import/no-anonymous-default-export */
import { useState, useContext, createContext, memo } from 'react';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

const menu = [
  {
    text: 'Dashboard',
    icon: <DashboardOutlinedIcon vIdeographic={true} />,
    path: '/dashboard'
  },
  {
    text: 'Usuários',
    icon: <PeopleAltOutlinedIcon />,
    path: '/usuarios'
  },
  {
    text: 'Tarefas',
    icon: <CheckBoxOutlineBlankOutlinedIcon />,
    items: [
      {
        text: 'Minhas',
        path: '/tarefas/minhas',
        icon: <AssignmentIndOutlinedIcon />
      },
      {
        text: 'Em Aberto',
        path: '/tarefas/abertas',
        icon: <AssignmentOutlinedIcon />
      },
      {
        text: 'Finalizadas',
        path: '/tarefas/finalizadas',
        icon: <AssignmentTurnedInOutlinedIcon />
      }
    ]
  }
];

export const MainLayoutContext = createContext({});
MainLayoutContext.displayName = 'MainLayoutContext';

// Provider component that wraps your app and makes users object ...
// ... available to any child component that calls useMainContext().
function ProviderMain({ children }) {
  const context = useProviderMainLayout();

  return (
    <>
      <MainLayoutContext.Provider value={context}>{children}</MainLayoutContext.Provider>;
    </>
  );
}
export default memo(ProviderMain);

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useMainContext = () => {
  return useContext(MainLayoutContext);
};

// Provider hook that creates users object and handles state
function useProviderMainLayout() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  return {
    sidebarIsOpen,
    setSidebarIsOpen,
    setDropDownIsOpen,
    dropDownIsOpen,
    menu
  };
}
