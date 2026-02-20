import {apiClient} from "@/lib/apiClient.ts";
import type {Category} from "@/model/category.ts";

export async function getAllCategories(){
    const {data: categories} = await apiClient.get<Category[]>('/categories');
    return categories;
}