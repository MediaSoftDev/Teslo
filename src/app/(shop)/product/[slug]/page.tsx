import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
     
     {/* Slideshow */}
      <div className="col-span-2 md:col-span-2">
        <h1 className="text-xl font-semibold">Look at this, isn't it cool?</h1>


        {/* Mobile Slideshow */}
        <ProductMobileSlideshow 
          title={product.title}
          images={product.images} 
          className="block md:hidden" //block for default
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow 
          title={product.title}
          images={product.images}
          className="hidden md:block" //hidden for default     
        />

      </div>


     {/* Details */}
     <div className="col-span-1 md:col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-2xl`}>
          {product.title}
        </h1>
        <p className="text-xl mb-5">${product.price}</p>
      
      
        {/* Sizes Selector */}
        <SizeSelector 
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />


        {/* Qty Selector */}
        <QuantitySelector 
          quantity={2}
        />


        {/* Add Cart Button */}
        <button className="btn-primary my-5">
          Add Cart
        </button>

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">
          {product.description}
        </p>
      
      </div>

    </div>
  );
}
