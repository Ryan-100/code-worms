import WatchMovie from '@/components/LV3/Watch/Watch';
import { useRouter } from 'next/router';

export default function Watch() {
  const router = useRouter();
  const { id } = router.query;

  return <WatchMovie/>;
}