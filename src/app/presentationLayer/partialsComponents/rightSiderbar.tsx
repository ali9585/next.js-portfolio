import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineContainer,
    AiOutlineAlignRight,
    AiOutlineMan,
    AiOutlineLaptop,
    AiOutlineMail
} from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { usePageSectionController } from "@/app/appLayer/utils/usePageSectionController";
import { RootState } from "../redux/store/store";
import { useSelector } from 'react-redux';

export const RightSideBar: React.FC = (): JSX.Element => {
    const pageSectionController = usePageSectionController();

    const pageSection = useSelector((state: RootState) => state.pageSection.current);

    const links = [
        {
            label: 'Home',
            icon: (isActive: boolean) => {
                return (<AiOutlineHome size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'About',
            icon: (isActive: boolean) => {
                return (<AiOutlineUser size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'Resume',
            icon: (isActive: boolean) => {
                return (<AiOutlineContainer size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'Services',
            icon: (isActive: boolean) => {
                return (<AiOutlineAlignRight size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'Skills',
            icon: (isActive: boolean) => {
                return (<AiOutlineMan size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'Portfolio',
            icon: (isActive: boolean) => {
                return (<AiOutlineLaptop size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'Testimonial',
            icon: (isActive: boolean) => {
                return (<LiaCommentSolid size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
        {
            label: 'Contact',
            icon: (isActive: boolean) => {
                return (<AiOutlineMail size={19} color={isActive ? '#28e98c' : '#999999'} />);
            }
        },
    ]

    return (
        <>
            <ul className="right-sidebar">
                {links.map((link, index) => (
                    <li onClick={() => pageSectionController.updateSection(index)} key={index}>
                        {link.icon(pageSection === index ? true : false)}
                        <span>{link.label}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}