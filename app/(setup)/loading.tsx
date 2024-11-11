import { Loader } from "lucide-react";

const LoadingVideo = () => {
  return (
    <div className="h-full min-h-screen flex flex-col space-y-4 justify-center items-center">
      <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
    </div>
  );
};

export default LoadingVideo;
