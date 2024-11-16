import { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFormattedCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  const customers = await fetchFormattedCustomers();

  return <CustomersTable customers={customers} />;
}
