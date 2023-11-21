import Image from "next/image";
import { SectionBadge } from "@/app/utils/sectionBadge";
import { LiaShapesSolid } from "react-icons/lia";

const Skills: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="skills">
                <SectionBadge title="Skills" icon={<LiaShapesSolid className='icon' size={15} color='#fff' />} />
                <h1 className="section-title">
                    My <span>Advantages</span>
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                <div className="flex flex-col items-center">
                    <div className="item-wrapper">
                        <div className="item">
                            <svg fill="#ffffff" width="69px" height="69px" viewBox="0 -1.5 27 27" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00027"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m15.902 11.974c0 1.331-1.079 2.41-2.41 2.41s-2.41-1.079-2.41-2.41 1.079-2.41 2.41-2.41 2.41 1.079 2.41 2.41z"></path><path d="m13.491 17.494c-.201.005-.438.008-.676.008-2.811 0-5.522-.425-8.073-1.214l.193.051c-1.351-.436-2.522-1.079-3.541-1.903l.021.016c-.789-.571-1.32-1.455-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172 2.512-.827 5.403-1.304 8.405-1.304.139 0 .278.001.417.003h-.021c.116-.002.252-.003.389-.003 2.965 0 5.82.469 8.496 1.337l-.195-.055c1.305.424 2.438 1.036 3.433 1.814l-.024-.018c.775.546 1.298 1.404 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374-2.363.729-5.08 1.149-7.895 1.149-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087 0 .893 1.301 2.3 4.153 3.274 2.249.697 4.834 1.099 7.513 1.099.235 0 .469-.003.702-.009l-.034.001c.146.003.318.005.49.005 2.684 0 5.274-.4 7.715-1.143l-.187.049c2.96-.984 4.32-2.391 4.32-3.28-.102-.638-.462-1.176-.966-1.515l-.008-.005c-.866-.674-1.876-1.217-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208-.142 0-.283.001-.424.003h.021z"></path><path d="m8.023 23.986c-.016 0-.035.001-.053.001-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141.697-3.128 1.827-5.894 3.344-8.4l-.069.124c1.499-2.655 3.31-4.926 5.425-6.872l.02-.018c.923-.844 2.003-1.537 3.187-2.028l.073-.027c.407-.196.885-.31 1.39-.31.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013c-.958.877-2.083 1.59-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zm1.205-14.447.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926.191.102.417.161.657.161.02 0 .041 0 .061-.001h-.003c.955 0 2.458-.605 4.196-2.122 1.976-1.867 3.654-4.023 4.972-6.404l.068-.135c1.318-2.156 2.371-4.653 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378-.238-.094-.514-.148-.802-.148-.364 0-.708.087-1.012.24l.013-.006c-1.118.465-2.078 1.086-2.907 1.846l.007-.006c-2.041 1.881-3.772 4.057-5.136 6.468l-.069.132z"></path><path d="m18.96 24c-1.306 0-2.96-.787-4.69-2.276-2.175-1.983-4.017-4.282-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185c-.162-.709-.255-1.522-.255-2.357 0-.527.037-1.044.108-1.551l-.007.058c.085-.998.608-1.858 1.372-2.399l.01-.007c1.43-.83 3.865.024 6.342 2.228 2.022 1.914 3.748 4.113 5.118 6.54l.072.138c1.428 2.297 2.557 4.961 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36 0 .577-.044 1.143-.13 1.696l.008-.062c-.103 1.022-.644 1.901-1.429 2.456l-.011.007c-.348.199-.764.316-1.207.316-.018 0-.036 0-.054-.001h.003zm-9.228-9.823c1.458 2.571 3.217 4.771 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834.773-.446 1.339-2.276.754-5.233-.702-2.89-1.787-5.434-3.219-7.741l.065.112c-1.379-2.456-3.027-4.562-4.948-6.384l-.012-.011c-2.334-2.074-4.225-2.54-4.998-2.094-.473.385-.784.952-.825 1.593v.007c-.055.39-.086.84-.086 1.298 0 .757.086 1.493.248 2.201l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"></path></g></svg>
                        </div>
                    </div>
                    <p className="skill-name">Laravel</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="item-wrapper">
                        <div className="item">
                            <Image alt="..." src={require('../../../../../public/assets/images/laravel.png')} />
                        </div>
                    </div>
                    <p className="skill-name">Laravel</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="item-wrapper">
                        <div className="item">
                            <Image alt="..." src={require('../../../../../public/assets/images/laravel.png')} />
                        </div>
                    </div>
                    <p className="skill-name">Laravel</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="item-wrapper">
                        <div className="item">
                            <Image alt="..." src={require('../../../../../public/assets/images/laravel.png')} />
                        </div>
                    </div>
                    <p className="skill-name">Laravel</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="item-wrapper">
                        <div className="item">
                            <Image alt="..." src={require('../../../../../public/assets/images/laravel.png')} />
                        </div>
                    </div>
                    <p className="skill-name">Laravel</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="item-wrapper">
                        <div className="item">
                            <Image alt="..." src={require('../../../../../public/assets/images/laravel.png')} />
                        </div>
                    </div>
                    <p className="skill-name">Laravel</p>
                </div>
                </div>
            </div>
        </>
    );
}

export default Skills;