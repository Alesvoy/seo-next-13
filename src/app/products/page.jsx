import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../api/route";

export default async function Page() {
  const products = await getProducts();
  return (
    <div>
      <h1>This is the products page!</h1>
      <section>
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={50}
                height={50}
              />
            </div>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const metadata = {
  title: "Products",
  description: "This is the products page!",
  keywords: ["e-commerce", "store", "shopping"],
};
