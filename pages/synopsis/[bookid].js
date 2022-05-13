import { useRouter } from 'next/router';

const Synopsis = () => {
  const router = useRouter();

  const { bookid } = router.query;

  return (
    <div>
      { bookid }
    </div>
  );
}

export default Synopsis;
