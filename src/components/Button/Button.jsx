import { Button } from './Button.styles';

const MarksButton = ({ children, action }) => {
  return <Button onClick={action}>{children}</Button>;
};

export default MarksButton;
