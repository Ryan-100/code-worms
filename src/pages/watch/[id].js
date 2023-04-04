import WatchMovie from '@/components/LV3/Watch/Watch';
import PrivateRoute from '@/service/Auth';
import { useRouter } from 'next/router';

export default function Watch() {
  const router = useRouter();
  const { id } = router.query;

  return <PrivateRoute><WatchMovie id={id}/></PrivateRoute>;
}
