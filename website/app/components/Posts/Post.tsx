import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import PostProps from "@/app/interfaces/postInterface";



const Post: React.FC<PostProps> = ({ username, text, date, id, image, gif }) => {

    return (
        <Card className="mb-4 bg-[#15202b] text-white" key={id}>
            <CardContent className="flex space-x-2" sx={{borderBottom: "0.5px solid gray"}}>
                <Avatar alt={username} />
                <div>
                    <div className="flex flex-row items-center justify-start">
                    <Typography variant="h6" component="div" className="text-slate-600" sx={{fontSize:"20px"}}>
                        {username}
                    </Typography>
                    <Typography variant="h6" component="div" className="text-slate-600" sx={{marginLeft: "6px", fontSize:"16px"}}>
                        @{username}
                    </Typography>
                    <Typography variant="body2" sx={{color: "white", marginLeft: "5px", fontSize: "13px"}}>
                        {date}
                    </Typography>
                    </div>
                    <Typography variant="body1">{text}</Typography>
                    {image && <img src={URL.createObjectURL(image)} alt="Selected Image" />}
                    {gif && <img src={gif} alt="Selected GIF" />}
                </div>
            </CardContent>
        </Card>
    );
};

export default Post;

