import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-yellow-300 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-300 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16">
          <img
            src="https://66.media.tumblr.com/7e54b7fc1b241d9bc709050bf64929ab/tumblr_mtisvo5e4Q1sjooyeo1_1280.png"
            alt="Auth Illustration"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;