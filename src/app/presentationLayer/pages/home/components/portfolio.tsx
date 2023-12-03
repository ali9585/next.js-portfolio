import Link from "next/link";
import { SectionBadge } from "@/app/presentationLayer/utils/sectionBadge";
import { LiaGripVerticalSolid } from "react-icons/lia";

const Portfolio: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="portfolio">
                <SectionBadge title='Portfolio' icon={<LiaGripVerticalSolid className='icon' size={14} color='#fff' />} />
                <h1 className="section-title">
                    Featured <span>Projects</span>
                </h1>
                <div className="projects">
                    <div className="item first">
                        <Link href=''>
                            <div className="image">
                                <img src="https://wpriverthemes.com/HTML/drake/assets/images/portfolio3.jpg" alt="" />
                                <div className="tech">
                                    <div>Laravel</div>
                                </div>
                            </div>
                        </Link>
                        <h2>
                            <Link href='' className="title">Bureau - Architecture Studio Website</Link>
                        </h2>
                    </div>
                    <div className="item">
                        <Link href=''>
                            <div className="image">
                                <img src="https://wpriverthemes.com/HTML/drake/assets/images/portfolio3.jpg" alt="" />
                                <div className="tech">
                                    <div>Laravel</div>
                                </div>
                            </div>
                        </Link>
                        <h2>
                            <Link href='' className="title">Bureau - Architecture Studio Website</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;