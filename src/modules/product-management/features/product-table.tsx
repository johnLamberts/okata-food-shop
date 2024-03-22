import { data } from "@/components/data-table/data";
import DataTable from "@/components/data-table/data-table";
import useProductColumn from "./product-columns";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProductTable = () => {
  const { columns } = useProductColumn();
  return (
    <ScrollArea className="h-screen">
      <DataTable data={data} columns={columns} />
    </ScrollArea>
  );
};
export default ProductTable;
