import { useEffect, useState } from "react";

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    if (!timestamp) return;

    const getTimeAgo = () => {
      const now = new Date();
      const time = typeof timestamp === "function" ? timestamp() : timestamp;
      const diffInSeconds = Math.floor((now - time) / 1000);

      if (diffInSeconds < 60) {
        return diffInSeconds === 1
          ? "1 second ago"
          : `${diffInSeconds} seconds ago`;
      }

      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return diffInMinutes === 1
          ? "1 minute ago"
          : `${diffInMinutes} minutes ago`;
      }

      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) {
        return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
      }

      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) {
        return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
      }

      const diffInWeeks = Math.floor(diffInDays / 7);
      if (diffInWeeks < 5) {
        return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
      }

      const nowYear = now.getFullYear();
      const timeYear = time.getFullYear();
      const nowMonth = now.getMonth();
      const timeMonth = time.getMonth();

      const diffInMonths = nowMonth - timeMonth + 12 * (nowYear - timeYear);
      if (diffInMonths < 12) {
        return diffInMonths === 1
          ? "1 month ago"
          : `${diffInMonths} months ago`;
      }

      const diffInYears = nowYear - timeYear;
      return diffInYears === 1 ? "1 year ago" : `${diffInYears} years ago`;
    };

    setTimeAgo(getTimeAgo());

    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo());
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, [timestamp]);

  return <>{timeAgo}</>;
};

export default TimeAgo;
