export default interface PostProps {
  user_id?: number | string,
    text?: string;
  }
export interface AllPostsFetched extends PostProps {
  id?: number
}
