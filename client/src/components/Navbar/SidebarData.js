import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "홈",
    path: "/",
    icon: <AiIcons.AiFillAppstore />,
    cName: "nav-text",
  },
  {
    title: "QR코드",
    path: "/ticket",
    icon: <AiIcons.AiFillFile />,
    cName: "nav-text",
  },
  // {
  //     title: '주차장등록(다른곳으로 옮길거)',
  //     path: '/add',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text'
  // },
  {
    title: "결제내역",
    path: "/money",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  // {
  //     title: '예약페이지(나중에 없앰)',
  //     path: '/reservation',
  //     icon: <FaIcons.FaEnvelopeOpenText />,
  //     cName: 'nav-text'
  // },
];
