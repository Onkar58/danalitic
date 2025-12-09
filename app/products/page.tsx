import { NodeMesh } from "@/components/ui/node-mesh";
import type { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page of the site.",
};

const ProductsPage: FC = () => {
  return (
    <main className="relative p-6 h-[85vh] flex items-center justify-center">
      <NodeMesh />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF0066]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFBB33]/10 rounded-full blur-3xl" />
      <h1 className="text-xl sm:text-2xl md:text4xl lg:text-6xl">
        Coming Soon
      </h1>
    </main>
  );
};

export default ProductsPage;
