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

const RightSideBar: React.FC = (): JSX.Element => {
    return (
        <>
            <ul className="right-sidebar">
                <li>
                    <AiOutlineHome size={19} color='#999999' />
                    <span>Home</span>
                </li>
                <li>
                    <AiOutlineUser size={19} color='#999999' />
                    <span>About</span>
                </li>
                <li>
                    <AiOutlineContainer size={19} color='#999999' />
                    <span>Resume</span>
                </li>
                <li>
                    <AiOutlineAlignRight size={19} color='#999999' />
                    <span>Services</span>
                </li>
                <li>
                    <AiOutlineMan size={19} color='#999999' />
                    <span>Skills</span>
                </li>
                <li>
                    <AiOutlineLaptop size={19} color='#999999' />
                    <span>Portfolio</span>
                </li>
                <li>
                    <LiaCommentSolid size={19} color='#999999' />
                    <span>Testimonial</span>
                </li>
                <li>
                    <AiOutlineMail size={19} color='#999999' />
                    <span>Contact</span>
                </li>
            </ul>
        </>
    );
}

export default RightSideBar;