import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./Post.css";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltIcon} title="Like" color="grey" />
        <InputOptions Icon={ChatIcon} title="Comment" color="grey" />
        <InputOptions Icon={ShareIcon} title="Share" color="grey" />
        <InputOptions Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
