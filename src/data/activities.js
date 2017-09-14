import React from "react"

import {
  MeetUp,
  Speaker,
  Podcast,
  Blog,
  Connect,
  Jobs,
  More,
  About,
  Team,
} from "assets"

const iconSize = 70

const activities = [
  {
    id: 0,
    icon: <About size={iconSize} />,
    title: "About",
    subTitle: "What, How, Where & When",
    link: "/about",
  },
  {
    id: 1,
    icon: <Speaker size={iconSize} />,
    title: "Talks",
    subTitle: "Listen about all things crypto",
    link: "/talks",
  },
  {
    id: 2,
    icon: <MeetUp size={iconSize} />,
    title: "Meet Ups",
    subTitle: "Come meet, learn & collaborate",
    link: "/meetups",
  },
  {
    id: 3,
    icon: <Podcast size={iconSize} />,
    title: "Podcast",
    subTitle: "Join to discuss whats hot in crypto",
    link: "/podcast",
  },
  {
    id: 4,
    icon: <Blog size={iconSize} />,
    title: "Blog",
    subTitle: "Notes by the community",
    link: "/blog",
  },
  {
    id: 5,
    icon: <Jobs size={iconSize} />,
    title: "Jobs",
    subTitle: "Find work/developers",
    link: "/jobs",
  },
  {
    id: 7,
    icon: <Team size={iconSize} />,
    title: "Team",
    subTitle: "Folks that makes BIG tick",
    link: "/team",
  },
  {
    id: 8,
    icon: <Connect size={iconSize} />,
    title: "Connect",
    subTitle: "Catch us online!",
    link: "/connect",
  },
  {
    id: 6,
    icon: <More size={iconSize} />,
    title: "More",
    subTitle: "All the rest",
    link: "/more",
  },
]

export default activities
