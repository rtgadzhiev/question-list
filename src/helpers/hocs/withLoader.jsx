import { Suspense } from 'react';
import Loader from '../../components/ui/Loader/Loader';

function withLoader(Component) {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}

export default withLoader;
