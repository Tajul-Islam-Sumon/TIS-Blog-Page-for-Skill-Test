import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
    {
        id: "home",
        label: "Home",
        path: "/"
    },
    {
        id: "category",
        label: "Category",
        path: "/category/sport",
    },
    {
        id: "blogs",
        label: "Blogs",
        path: "/blogs"
    },
    {
        id: "search",
        label: "Search",
        path: "/search"
    },
];

export const categories: Option[] = [
    {
        value: "sport",
        label: "Sport",
    },
    {
        value: "data",
        label: "Data",
    },
    {
        value: "software",
        label: "Software",
    },
    {
        value: "tech",
        label: "Technology",
    },
    {
        value: "science",
        label: "Science",
    },
];

export const formControls: FormControlItem[] = [
    {
        id: "title",
        label: "Title",
        placeholder: "Enter Blog Title",
        type: "text",
        component: "input",
        options: [],
    },
    {
        id: "description",
        label: "Description",
        placeholder: "Enter Blog Description",
        type: "text",
        component: "textarea",
        options: [],
    },
    {
        id: "category",
        label: "Category",
        placeholder: "Choose Blog Category",
        type: "",
        component: "select",
        options: categories,
    },
];

export const firebaseConfig = {
    apiKey: "AIzaSyCb-gtZSGgWX7JfS4x0P0eKZNblAsbk9aE",
    authDomain: "tis-blog-page-249cf.firebaseapp.com",
    projectId: "tis-blog-page-249cf",
    storageBucket: "tis-blog-page-249cf.appspot.com",
    messagingSenderId: "831060448881",
    appId: "1:831060448881:web:24db91ebe27cb873956dd0",
    measurementId: "G-NX6NNGYWGY"
};


export const initialBlogFormData = {
    image: '',
    title: '',
    description: '',
    category: '',
}

