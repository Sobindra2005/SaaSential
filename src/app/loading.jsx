import Container from '@/components/Layout/Container';


export default function Loader() {
  return (
    <Container className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
        <p className="mt-4 text-secondary">Loading...</p>
      </div>
    </Container>
  );
}