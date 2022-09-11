export default function HeaderLogo(props) {
    return (
        <div className="flex flex-row p-1 items-center ml-3">
            <div className="flex justify-end">
                <img src={props.image} alt="Logo" />
            </div>
            <div className="font-poppins text-lg subpixel-antialiased font-semibold tracking-wider leading-7 ml-1 lg:visible sm:invisible">{props.title}</div>
        </div>
    );
}