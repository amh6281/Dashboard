import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "이미지",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "상품명",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "색상",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "가격",
    width: 200,
  },
  {
    field: "producer",
    headerName: "판매자",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "생성 날짜",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "판매 여부",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>상품 목록</h1>
        <button onClick={() => setOpen(true)}>상품 추가</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
