
function onClickMenu(e) {
    const other_button_parent = [...document.querySelectorAll('ul>li')];
    console.log(other_button_parent);
    // return;
    other_button_parent.forEach((item) => {
        item.classList.remove('text-primary');
        item.classList.add('text-secondary');
    });

    const parent = e.target.parentElement;
    parent.classList.add('text-primary');
    parent.classList.remove('text-secondary');
}

export default function HeaderNavbar() {
    return (
        <ul className="flex lg:flex-row lg:visible sm:invisible items-center justify-center gap-10 font-sansPro font-semibold text-base h-4">
            <li className="text-secondary text-primary">
                <button onClick={(e) => { onClickMenu(e) }}>Home</button>
            </li>
            <li className="text-secondary">
                <button onClick={(e) => { onClickMenu(e) }}>Fitur-Fitur</button>
            </li>
            <li className="text-secondary">
                <button onClick={(e) => { onClickMenu(e) }}>Harga</button>
            </li>
            <li className="text-secondary">
                <button onClick={(e) => { onClickMenu(e) }}>Testimoni</button>
            </li>
            <li className="text-[#FFFFFF] bg-primary py-1.5 px-3 rounded-md flex flex-row gap-1 items-center">
                <button>
                    Download
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </li>
        </ul>

    );
}