export default function SectionAboutCard(props) {
    return (
        <div className="bg-primaryExtraLight p-10 rounded-md">
            <div className="flex flex-row items-center">
                <div className="bg-primaryLight p-[13px] rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FE5E44" className="w-6 h-6 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d={props.icon} />
                    </svg>

                </div>
                <p className="font-sansPro font-semibold text-base leading-7 p-2">
                    {props.title ?? 'Title'}
                </p>
            </div>
            <p className="mt-[25px] font-sansPro font-normal text-base leading-7">{props.summary ?? 'Summary'}</p>
        </div>
    );
}