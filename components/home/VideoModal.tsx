import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

import { X } from "lucide-react";
import React, { useEffect } from "react";
import useVideoStore from "@/store/youtube-video/video";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const VideoModal = ({ open, setOpen }: props) => {
  const { video_url , fetchVideoUrl } = useVideoStore();

  useEffect(() => {
    if (!video_url) fetchVideoUrl();
  }, [fetchVideoUrl]);
  // @ts-ignore
  return (
    <div className="bg-white px-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent
          className={
            "bg-white w-full max-w-[380px] xs:max-w-[480px] sm:max-w-[600px] p-3"
          }
        >
          <AlertDialogHeader>
            <X
              className="absolute top-0 right-0 cursor-pointer text-gray-700"
              onClick={() => setOpen(false)}
            />

            <AlertDialogDescription>
              <div className="h-[380px] rounded-lg overflow-hidden">
                {video_url ? (
                  <iframe
                    src={
                      video_url.includes("youtu.be")
                        ? `https://www.youtube.com/embed/${video_url.split("/").pop().split("?")[0]}`
                        : `https://www.youtube.com/embed/${new URLSearchParams(new URL(video_url).search).get("v")}`
                    }
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  ""
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default VideoModal;
