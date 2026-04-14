import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO SECTION */}
      <section className="relative min-h-112 overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/45" />

        <div className="relative z-10 flex min-h-88 items-start justify-end text-right sm:min-h-96">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
              Campus Marketplace
            </p>

            <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
              Welcome to BulldogEx Shop
            </h1>

            <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
              Explore campus uniforms, student essentials, and school merch in one
              quick storefront.
            </p>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '08', label: 'Products' },
            { value: '06', label: 'Categories' },
            { value: '24', label: 'Orders' },
            { value: '03', label: 'Pickup Slots' },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5"
            >
              <p className="text-2xl font-bold text-zinc-900">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          {/* CARD 1 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src="https://souvenirsity.github.io/media/images/products/tumblers/nu.jpg"
                alt="Daily Essentials"
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Daily Essentials
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Bags, tumblers, lanyards, and items used every school day.
            </p>

            <Button to="/products" className="mt-4" variant="primary">
              View Products
            </Button>
          </article>

          {/* CARD 2 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/469557487_1312366193538184_6888019757985679403_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeF8t5VdLDvj831ToRx8dHaYXWV5FlfRI6xdZXkWV9EjrAQzrMBmFGXz4vb1RuOHvgYM5XPh5uRqcJfcvadKQglJ&_nc_ohc=JLw9Efn8FikQ7kNvwGaw9Hk&_nc_oc=AdpAWAsX0ZJpJihoKvb4uADwla-uDxxuyAlRnn2S1xtf93IrWVtQT9CsNEQ8VAHN_Hg&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=5HNrYeVmW2NlvuQes-ATfA&_nc_ss=7a3a8&oh=00_Af2q3VeBumNS4c044XSdBOmxxBRq-C7jHMylFvTPS3z2qw&oe=69E41567"
                alt="Study Supplies"
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Study Supplies
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Notes, desk tools, and study kits for class and review weeks.
            </p>

            <Button to="/products" className="mt-4" variant="primary">
              Shop Supplies
            </Button>
          </article>

          {/* CARD 3 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/469958669_1312994066808730_5405078896215908282_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHmMlXFK0zi6BTFntVTNEI9BkRU5W-yXjMGRFTlb7JeM_AjAiOTXMbF6pyyYOw3vTANUDIN3cBNO2XIv1vcnIgL&_nc_ohc=AUVPLKqDON0Q7kNvwHBdngh&_nc_oc=Adr7StR7MC5fK0A9D5-lSz7dZFKxtqkaN0GsPpa2X4kWqRUhzSC0iRv85znpRt7-zbY&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=hsKoelbcJgqrlzI76Nidfw&_nc_ss=7a3a8&oh=00_Af1ERuSoCUeJ0HQJOu6OIxNY63RaC43CXenVE3B5GkiPiw&oe=69E41A31"
                alt="Campus Apparel"
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Campus Apparel
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Comfortable pieces for class days, commute days, and weekends.
            </p>

            <Button to="/products" className="mt-4" variant="primary">
              View Apparel
            </Button>
          </article>

        </div>
      </section>
    </div>
  );
};

export default HomePage;