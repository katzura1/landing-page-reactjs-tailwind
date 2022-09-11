import HeaderCol from "./HeaderCol";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavBar";

export default function Header() {
    return (

        <section
            className='header py-10 bg-gradient-to-r from-[#fff4f266] to-[#FFF0EE]'
            style={{
                '--tw-gradient-stops': 'var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%',
            }}
        >
            <div className="hero-container flex flex-col gap-20">
                <div className="flex flex-row justify-center items-center p-3 bg-[#FFFFFF] w-3/4 mx-auto rounded-md drop-shadow-lg">
                    <div className="basis-2/4">
                        <HeaderLogo title="ZEITPLAN" image="./img/logo.png" />
                    </div>
                    <div className="basis-2/4">
                        <HeaderNavbar />
                    </div>
                </div>

                {/* //header slider */}
                <HeaderCol />
            </div >
        </section>
    );
}