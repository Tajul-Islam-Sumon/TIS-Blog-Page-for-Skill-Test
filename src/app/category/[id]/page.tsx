import CategoryList from "@/app/components/category";


async function getAllListByCategory(getID: string){
    const res = await fetch(`${process.env.URL}/api/category?categoryID=${getID}`, {
        method: 'GET',
        cache: 'no-store'
    })

    const data = await res.json();

    if(data.success) return data.data
}

export default async function Category({params}: {params: any}) {
    const {id} = params; 
    const getAllList = await getAllListByCategory(id); 

    return <CategoryList list={getAllList} />
}