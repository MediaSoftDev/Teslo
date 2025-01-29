import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const products = initialData.products;


export default function ({ params }: Props) {
  const { id } = params;
  
  const labels:Record<Category,string> = {
    'men': 'Men',
    'women': 'Women',
    'kid': 'Kids',
    'unisex': 'All'
  }

  const captions:Record<Category,string> = {
    'men': 'Best Sellers for Men',
    'women': 'Sweatshirts and Hoodies',
    'kid': 'Best Sellers for Kids',
    'unisex': 'Best Sellers for Everyone'
  }

  // if (id === 'kids') {
  //  notFound()

  // }
  const prodFilteredByGender = products.filter((e) => e.gender === id)

 
  return (
    <div>
      {id && (
        <>
          <Title
            title={`${labels[id]}`}
            subtitle={`${captions[id]}`}
           // subtitle={`${id[0].toUpperCase() + id.slice(1)} Products`}
            className="mb-2"
          />

          <ProductGrid products={prodFilteredByGender} />
        </>
      )} 
    </div>
  );
}
