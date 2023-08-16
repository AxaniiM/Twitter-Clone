export default interface PostProps {
  user_id?: number | string,
    text?: string;
    id?:number
  }
export interface AllPostsFetched extends PostProps {
  id?: number
}
