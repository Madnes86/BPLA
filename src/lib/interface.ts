export interface INew {
    src: string, 
    title: string,
    imgs: string[],
    text: string, 
    tag?: string, 
    date: Date 
}
export interface ITag {
    icon: any, 
    name: string, 
    color: string
}