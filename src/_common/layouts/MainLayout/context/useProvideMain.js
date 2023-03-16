/* eslint-disable import/no-anonymous-default-export */
import { useCallback, useState } from 'react';

import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

const menu = [
  {
    text: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
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
        icon: <AssignmentIndOutlinedIcon   />

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
      },
    ]
  }
];


export default function useProvideMain() {
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
