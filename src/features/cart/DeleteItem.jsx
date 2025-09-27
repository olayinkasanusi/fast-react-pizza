/* eslint-disable react/prop-types */

import Button from '../../ui/Button';

function DeleteItem({ children, onClick }) {
  return (
    <Button type="small" onClick={onClick}>
      {children}
    </Button>
  );
}

export default DeleteItem;
