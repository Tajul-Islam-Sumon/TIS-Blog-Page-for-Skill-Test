import CategoryList from "@/app/components/category";

async function getAllListsByCategory(getId: string) {
  const res = await fetch(`/api/category?categoryID=${getId}`, {
    method: "GET",
    cache: "no-cache",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;

  const getAllList = await getAllListsByCategory(id);

  return <CategoryList list={getAllList} />;
}