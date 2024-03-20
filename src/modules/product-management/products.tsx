import { Layout, LayoutBody, LayoutHeader } from "@/components/custom/layouts";
import UserHeader from "@/components/user-header";

const Products = () => {
  return (
    <Layout>
      <LayoutHeader>
        <UserHeader headerName="Product" />
      </LayoutHeader>

      <LayoutBody>product management list</LayoutBody>
    </Layout>
  );
};
export default Products;
