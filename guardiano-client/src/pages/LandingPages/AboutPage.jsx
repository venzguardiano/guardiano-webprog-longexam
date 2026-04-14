import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div className="h-72 overflow-hidden rounded-3xl">
            <img
              src="https://www.bworldonline.com/wp-content/uploads/2022/10/NUBulldogs-1024x576.jpg"
              alt="BulldogEx"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>

        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '08', label: 'Items' },
            { value: '06', label: 'Categories' },
            { value: '03', label: 'Pickup Slots' },
            { value: '24', label: 'Orders' },
          ].map((item, index) => (
            <div key={index} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">{item.value}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Stacked shopping wireframe
            </h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Curated Catalog",
                  desc: "Products are grouped by daily need so shoppers can scan faster."
                },
                {
                  title: "Simple Checkout",
                  desc: "Product pages keep price, stock, and action buttons easy to find."
                },
                {
                  title: "Pickup Ready",
                  desc: "Store information stays direct for students who need quick order updates."
                }
              ].map((item, index) => (
                <article key={index} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "https://varsitylifestyleco.com/cdn/shop/files/NU_1_3f436c59-5a59-464c-a0f1-16aee5b27f00.jpg?v=1772768368&width=713",
                "https://varsitylifestyleco.com/cdn/shop/files/NU_A_1.jpg?v=1763605585&width=713",
                "https://varsitylifestyleco.com/cdn/shop/files/NU_C_1.jpg?v=1759909106&width=713",
                "https://varsitylifestyleco.com/cdn/shop/files/VLCVBNUV31.jpg?v=1748920544&width=713"
              ].map((img, index) => (
                <div key={index} className="flex aspect-square overflow-hidden rounded-[1.25rem] bg-zinc-200">
                  <img
                    src={img}
                    alt={`Category ${index + 1}`}
                    className="h-full w-full object-cover transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;