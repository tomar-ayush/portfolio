import { useEffect } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const YouTubeRedirect = () => {
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		if (slug && Array.isArray(slug)) {
			// Reconstruct the original YouTube path

			const params = useParams();
			const url = params?.slug;

			if (videoId) {
				// Redirect to YouChat with the video ID
				window.location.href = `https://youchat-saas.vercel.app/app/video/${url}`;
			} else {
				// Optional fallback
				window.location.href = "https://youchat-saas.vercel.app/";
			}
		}
	}, [slug]);

	return <p>Redirecting to YouChat...</p>;
};

export default YouTubeRedirect;

