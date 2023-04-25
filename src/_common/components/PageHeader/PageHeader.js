import { useEffect } from 'react';
import PageHeaderView from './PageHeaderView';

const PageHeader = ({ title, actionButton }) => {
  const defaultTitle = `Task Organizze`;

  useEffect(() => {
    document.title = `${defaultTitle} - ${title}`;
  }, []);

  return <PageHeaderView {...{ title, actionButton }} />;
};

export default PageHeader;
