"use client";

import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";

const YouTubeRedirect = () => {
  const params = useParams();
  const url = params?.slug;
  const searchParams = useSearchParams();

  useEffect(() => {
    // For the example URL: http://localhost:3000/youtube.com/watch?v=FMsZbo1DJRg

    // Get the current path segment (should be "watch" in this case)
    const slug = params.slug;
    console.log("slug is: " + slug);
    console.log("url is: " + url);

    // Get video ID from query parameter
    const videoId = searchParams.get("v");

    if (slug === "watch" && videoId) {
      // Construct the original YouTube URL
      const fullYoutubeUrl = `youtube.com/${slug}?v=${videoId}`;

      // Redirect with the entire URL as a parameter
      // window.location.href = `https://youchat-saas.vercel.app/app/video/${encodeURIComponent(
      //   fullYoutubeUrl
      // )}`;
      window.location.href = `https://youchat-saas.vercel.app/app/video/${encodeURIComponent(
        fullYoutubeUrl
      )}`;
    } else {
      // Handle other paths or missing parameters
      const fallbackUrl = `youtube.com/${slug}`;
      window.location.href = `https://youchat-saas.vercel.app/app?url=${encodeURIComponent(
        fallbackUrl
      )}`;
    }
  }, [params, searchParams]);

  return <p>Redirecting to YouChat...</p>;
};

export default YouTubeRedirect;
