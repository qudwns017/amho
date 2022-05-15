import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: '홈',
        path: '/',
        icon: <AiIcons.AiFillAppstore />,
        cName: 'nav-text'
    },
    {
        title: '내 정보',
        path: '/',
        icon: <AiIcons.AiFillFile />,
        cName: 'nav-text'
    },
    {
        title: '결제정보',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: '즐겨찾기',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: '공지사항',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: '도움',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];