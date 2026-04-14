import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      <section className="bg-zinc-50 px-6 py-20 border-y-4 border-zinc-900 text-center">
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Error
        </p>
        <h1 className="text-8xl font-extrabold text-zinc-900">404</h1>
        <p className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto">
          Page not found. The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button to="/" className="px-6 py-3">Back Home</Button>
          <Button to="/products" className="px-6 py-3">View Products</Button>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20 border-y-4 border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-zinc-500 text-center">
            Quick Links
          </p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900 text-center">Explore the site</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-zinc-900 bg-linear-to-b from-zinc-100 to-zinc-200 p-6 text-center shadow-md">
              <h3 className="font-semibold text-zinc-900">Home</h3>
              <p className="mt-2 text-sm text-zinc-600">Return to the homepage</p>
              <Button to="/" className="mt-4 w-full">Go Home</Button>
            </div>
            <div className="rounded-2xl border-2 border-zinc-900 bg-linear-to-b from-zinc-100 to-zinc-200 p-6 text-center shadow-md">
              <h3 className="font-semibold text-zinc-900">About</h3>
              <p className="mt-2 text-sm text-zinc-600">Learn more about BulldogEx</p>
              <Button to="/about" className="mt-4 w-full">Go About</Button>
            </div>
            <div className="rounded-2xl border-2 border-zinc-900 bg-linear-to-b from-zinc-100 to-zinc-200 p-6 text-center shadow-md">
              <h3 className="font-semibold text-zinc-900">Products</h3>
              <p className="mt-2 text-sm text-zinc-600">Browse all featured store items</p>
              <Button to="/products" className="mt-4 w-full">View Products</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;