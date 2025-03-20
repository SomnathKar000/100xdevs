import React from "react";
import SideBarListItem from "./SideBarListItem";

const Index = () => {
  const youtubeSidebarItems = [
    {
      items: [
        { icon: "home", title: "Home" },
        { icon: "compass", title: "Explore" },
        { icon: "play-circle", title: "Shorts" },
        { icon: "subscriptions", title: "Subscriptions" },
      ],
    },
    {
      section: "Library",
      items: [
        { icon: "video-library", title: "Library" },
        { icon: "history", title: "History" },
        { icon: "smart-display", title: "Your Videos" },
        { icon: "schedule", title: "Watch Later" },
        { icon: "thumb-up", title: "Liked Videos" },
      ],
    },
    {
      section: "Subscriptions",
      items: [
        { icon: "account-circle", title: "Channel 1" },
        { icon: "account-circle", title: "Channel 2" },
        { icon: "account-circle", title: "Channel 3" },
        { icon: "account-circle", title: "Channel 4" },
      ],
    },
    {
      section: "Explore",
      items: [
        { icon: "whatshot", title: "Trending" },
        { icon: "music_note", title: "Music" },
        { icon: "gamepad", title: "Gaming" },
        { icon: "live_tv", title: "Live" },
        { icon: "emoji_events", title: "Sports" },
        { icon: "movie", title: "Movies & TV" },
        { icon: "newspaper", title: "News" },
        { icon: "lightbulb", title: "Learning" },
        { icon: "podcasts", title: "Podcasts" },
      ],
    },
    {
      section: "More from YouTube",
      items: [
        { icon: "movie", title: "Movies & TV" },
        { icon: "live-tv", title: "Live" },
        { icon: "gamepad", title: "Gaming" },
        { icon: "emoji-events", title: "Sports" },
        { icon: "library-music", title: "Music" },
        { icon: "podcasts", title: "Podcasts" },
      ],
    },
    {
      section: "Settings",
      items: [
        { icon: "settings", title: "Settings" },
        { icon: "flag", title: "Report history" },
        { icon: "help", title: "Help" },
        { icon: "feedback", title: "Send feedback" },
      ],
    },
  ];
  return (
    <div className=" w-65  h-full sidebar pt-5">
      {youtubeSidebarItems.map((item) => (
        <div key={item.section}>
          <p className="pt-4">{item.section}</p>
          {item.items.map((singleItem) => (
            <SideBarListItem icon={singleItem.icon} title={singleItem.title} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;
