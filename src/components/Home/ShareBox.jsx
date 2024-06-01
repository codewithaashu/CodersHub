import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareBox = () => {
  return (
    <>
      <DialogContent className="sm:max-w-md p-5 h-40 flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle>Share To</DialogTitle>
          <DialogDescription>
            Share this post to your friends and colleagues
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row flex-wrap gap-5">
          <WhatsappShareButton
            url={"https://funnbook.vercel.app/"}
            title="Facebookkss"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TelegramShareButton
            url={"https://funnbook.vercel.app/"}
            title="New Post"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <LinkedinShareButton
            url={"https://funnbook.vercel.app/"}
            title="New Post"
            summary="Link of new post is"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <FacebookShareButton
            url={"https://funnbook.vercel.app/"}
            hashtag="#interview"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://funnbook.vercel.app/"}
            title="Facebookkss"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton
            url={"https://funnbook.vercel.app/"}
            subject="New Post"
            body="Link of new post is"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </DialogContent>
    </>
  );
};

export default ShareBox;
