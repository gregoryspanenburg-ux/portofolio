export interface Project {
    id: number
    banner: string
    images: string[]
    title: string
    description: string
    madeOn: string
    categoryId: number
    githubUrl: string
    usedTechnologies : number[]
    detail: Detail[]
}

interface Detail{
    title: string
    paragraphs: string[]
}