
import { useCallback, useState, memo } from 'react';
import MenuItemView from './MenuItemView';

const MenuItem = memo(({item})=> {
  console.log(`rendering ${item.path}`);
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => setIsOpen(!isOpen),[isOpen])

  return <MenuItemView  {...{ item, isOpen, handleClick }} />;

},  () => true);

export default MenuItem;

