import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form>
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
}

export default UpdateOrder;
