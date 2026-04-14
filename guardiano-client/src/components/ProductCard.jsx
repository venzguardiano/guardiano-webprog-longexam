import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="flex flex-col justify-between h-full rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
      <div>
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-zinc-200 overflow-hidden">
          <img
            src={product.images}
            alt={product.title}
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
          {product.category} {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-zinc-900">{product.title}</h3>
        <p className="mt-2 text-lg font-bold text-zinc-900">{product.price}</p>
        <p className="mt-4 text-sm leading-6 text-zinc-600">
          {product.content[0].substring(0, 140)}...
        </p>
      </div>

      <div className="mt-auto pt-6">
        <Button to={`/products/${product.name}`} className="w-full">
          View Product
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;