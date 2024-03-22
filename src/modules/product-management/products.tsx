import { Layout, LayoutBody, LayoutHeader } from "@/components/custom/layouts";
import { Separator } from "@/components/ui/separator";
import UserHeader from "@/components/user-header";
import ProductTable from "./features/product-table";

const Products = () => {
  return (
    <Layout>
      <LayoutHeader>
        <UserHeader headerName="Manage Product" />
      </LayoutHeader>
      <Separator />
      <LayoutBody>
        <ProductTable />
      </LayoutBody>
    </Layout>
  );
};
export default Products;
