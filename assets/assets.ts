import arrow from './arrow-icon.png';
import headerBg from './header-bg-color.png';
import moonIcon from './moon_icon.png';
import menuBlack from './menu-black.png';
import closeBlack from './close-black.png';
import profileImage from './profile_img.jpg';
import handIcon from './hand-icon.png';
import rightArrowWhite from './right-arrow-white.png';
import downloadIcon from './download-icon.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png'
import mongodb from './mongodb.png'
import figma from './figma.png'
import git from './git.png'
import intellij from './intellij.png'
import postman from './postman.png';
import mysql from './mysql.png'
import web from './web-icon.png';
import graphic from './graphics-icon.png'
import ui from './ui-icon.png'
import mobile from './mobile-icon.png'
import rightArrow from './right-arrow.png'
import sendIcon from './send-icon.png'
import mailIcon from './mail_icon.png';
import github from './github.png';
import linkedin from './linkedin.png'
import facebook from './facebook.png'
import githubDark from './github-dark.png';
import linkedinDark from './linkedin-dark.png'
import facebookDark from './facebook-dark.png'
import sunIcon from './sun_icon.png'
import arrowIconDark from './arrow-icon-dark.png'
import menuWhite from './menu-white.png'
import closeWhite from './close-white.png'
import mailIconDark from './mail_icon_dark.png'
import { link } from 'fs';

export const assets = {
    arrow,
    headerBg,
    moonIcon,
    menuBlack,
    closeBlack,
    profileImage,
    handIcon,
    rightArrowWhite,
    downloadIcon,
    rightArrow,
    sendIcon,
    mailIcon,
    github,
    linkedin,
    facebook,
    githubDark,
    linkedinDark,
    facebookDark,
    sunIcon,
    arrowIconDark,
    menuWhite,
    closeWhite,
    mailIconDark
}
export const infoList = [
    {
        icon : code_icon,
        iconDark: code_icon_dark,
        title: "Languages",
        description: "HTML, CSS, JavaScript, TypeScript, Java",
    },
    {
        icon : edu_icon,
        iconDark: edu_icon_dark,
        title: "Education",
        description: "Software Engineering in Enicarthage",
    },
    {
        icon : project_icon,
        iconDark: project_icon_dark,
        title: "Projects",
        description: "Built more than 10 projects",
    }
]
export const toolsData = [
    vscode, intellij, git, postman, mysql, mongodb, figma
]
export const serviceData = [
    {
        icon : web,
        title: "Web design",
        description: "Web developement is the process of building programming...",
        link : "",
    },
    {
        icon : mobile,
        title: "Mobile app",
        description: "Mobile app development involves creating software for mobile desvices...",
        link : "",
    },
    {
        icon : ui,
        title: "UI/UX design",
        description: "UI/UX design focuses on creating a seamless user experince...",
        link : "",
    },
    {
        icon : graphic,
        title: "Graphics design",
        description: "Creative design solutions to enhance visual communication...",
        link : "",
    }
]
export const workData = [
    {
        title : 'Investors Platform',
        description : 'Web app',
        bgImage : '/work-1.png',
        link : 'https://github.com/Iheb-Zenkri/Angular',
    },
    {
        title : 'Staff management',
        description : 'Mobile app',
        bgImage : '/work-2.png',
        link : 'https://github.com/Iheb-Zenkri/SNS_mobileApp',
    },
    {
        title : 'Ticket management',
        description : 'backend system',
        bgImage : '/work-3.png',
        link : 'https://github.com/Iheb-Zenkri/Ticket-Management-ExpressJs',
    },
    {
        title : 'E-Learning Platform',
        description : 'Fullstack app',
        bgImage : '/work-4.png',
        link : 'https://github.com/Iheb-Zenkri/E-Learning-Platforme-SpringBoot',
    },
]