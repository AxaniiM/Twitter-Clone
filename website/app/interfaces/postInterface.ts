export default interface PostProps {
    username: string;
    id: number;
    text: string;
    date: string;
    image: File | null
    gif: string | null
  }