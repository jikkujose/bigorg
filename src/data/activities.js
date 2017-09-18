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
  Interview,
} from "assets"

const iconSize = 70

const activities = [
  {
    id: 0,
    icon: <About size={iconSize} />,
    title: "About",
    subTitle: "What, Why & How of BIG",
    link: "/about",
  },
  {
    id: 1,
    icon: <Interview size={iconSize} />,
    title: "Interviews",
    subTitle: "Face to Face discussion with the experts",
    link: "/about",
  },
  {
    id: 2,
    icon: <Speaker size={iconSize} />,
    title: "Talks",
    subTitle: "Listen about all things crypto",
    link: "/talks",
  },
  {
    id: 3,
    icon: <MeetUp size={iconSize} />,
    title: "Meet Ups",
    subTitle: "Come meet, learn & collaborate",
    link: "/meetups",
  },
  {
    id: 4,
    icon: <Podcast size={iconSize} />,
    title: "Podcast",
    subTitle: "Join to discuss whats hot in crypto",
    link: "/podcast",
  },
  {
    id: 5,
    icon: <Blog size={iconSize} />,
    title: "Blog",
    subTitle: "Notes by the community",
    link: "/blog",
  },
  {
    id: 6,
    icon: <Jobs size={iconSize} />,
    title: "Jobs",
    subTitle: "Find work/developers",
    link: "/jobs",
  },
  {
    id: 8,
    icon: <Team size={iconSize} />,
    title: "Team",
    subTitle: "Folks that makes BIG tick",
    link: "/team",
  },
  {
    id: 9,
    icon: <Connect size={iconSize} />,
    title: "Connect",
    subTitle: "Catch us online!",
    link: "/connect",
  },
  {
    id: 10,
    icon: <More size={iconSize} />,
    title: "More",
    subTitle: "All the rest",
    link: "/more",
  },
]

export default activities
