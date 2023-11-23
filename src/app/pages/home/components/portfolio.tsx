import { SectionBadge } from "@/app/utils/sectionBadge";
import { LiaGripVerticalSolid } from "react-icons/lia";

const Portfolio: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="portfolio">
                <SectionBadge title='Portfolio' icon={<LiaGripVerticalSolid className='icon' size={14} color='#fff' />} />
            </div>
        </>
    );
}

export default Portfolio;