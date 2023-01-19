import { getAllDiscuss } from "@/api/discuss";

const tableData = await getAllDiscuss();
export { tableData };
