import React from "react";

const Catalog = () => {
  const categories = [
    {
      title: "ALL BOOKS",
      imageUrl: "https://www.linkshop.pk/image/cache/no_image-220x220w.png.webp",
      altText: "All Books",
    },
    {
      title: "ISLAM",
      imageUrl: "https://www.linkshop.pk/image/cache/categories/islam-220x220w.jpg.webp",
      altText: "Islam",
    },
    {
      title: "SUFISM",
      imageUrl: "https://www.linkshop.pk/image/cache/categories/sufism_and_tasawwuf_by_essani666-d464bu6-220x220h.jpg.webp",
      altText: "Sufism",
    },
    {
      title: "POETRY",
      imageUrl: "https://www.linkshop.pk/image/cache/categories/poetry-220x220w.jpg.webp",
      altText: "Poetry",
    },
    {
      title: "BIOGRAPHY",
      imageUrl: "https://www.linkshop.pk/image/cache/no_image-220x220w.png.webp",
      altText: "Biography",
    },
  ];

  return (
    <div className="bg-white py-12">
      <h2 className="text-4xl font-bold text-center mb-4">
        Browse our Catalog
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Fully customizable Catalog module. Automatically display your categories
        with available sub-categories on any page or mega menu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <div className="h-32 w-32 mx-auto mb-4">
              <img
                src={category.imageUrl}
                alt={category.altText}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
