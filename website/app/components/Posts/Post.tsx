import { Avatar } from "@chakra-ui/react"

interface Post {
    avatar: string,
    username: string,
    id: number,
    content: string,
}   


export const Post: React.FC<Post> = ({avatar, username, id, content}) => {

  return (
    <div key={id}>
    <Avatar src={avatar}/> 
    <div>{username}</div>
    <div>@{username}</div>
    <div>{content}</div>

    </div>

  )
}
