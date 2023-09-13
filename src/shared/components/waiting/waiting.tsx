import { PropsWithChildren, Suspense } from 'react';
import Spinner from '../spinner/spinner';

const Waiting = ({ children }: PropsWithChildren): JSX.Element => (
	<Suspense fallback={<Spinner />}>{children}</Suspense>
);

export { Waiting };
