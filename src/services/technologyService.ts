import {apiClient} from "@/lib/apiClient.ts";
import type {Technology} from "@/model/technology.ts";

export async function getAllTechnologies(){
    const {data: technologies} = await apiClient.get<Technology[]>("/technologies");
    return technologies;
}
