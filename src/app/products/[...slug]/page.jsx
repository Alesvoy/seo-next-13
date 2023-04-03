import Image from "next/image";
import { getProduct, getProducts } from "../../api/route";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params: { slug } }) {
  const product = await getProduct(slug);

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
        />
      </div>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
