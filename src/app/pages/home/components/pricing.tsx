import { SectionBadge } from "@/app/utils/sectionBadge";
import { FaDollarSign } from "react-icons/fa6";

const Pricing: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="pricing">
                <SectionBadge title="Pricing" icon={<FaDollarSign className='icon' size={13} color='#fff' />} />
                <h1 className="section-title">
                    My <span>Pricing</span>
                </h1>
                <div className="grid grid-cols-2 gap-[10px]">
                    <div className="card">
                        <div className="status flex justify-between">
                            <h4>Basic</h4>
                            <p>Have design ready to build? <br /> or small budget</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="status flex justify-between">
                            <h4>Basic</h4>
                            <p>Have design ready to build? <br /> or small budget</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;