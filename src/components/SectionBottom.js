export default function SectionBottom() {
    return (
        <section
            className="section-bottom mx-auto p-28 bg-gradient-to-r from-[#fff4f266] to-[#FFF0EE]"
            style={{
                '--tw-gradient-stops': 'var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%',
            }}
        >
            <div className="flex flex-col w-3/4 mx-auto justify-center items-center">
                <h1
                    className="font-patuaOne font-[400px] text-[38px] leading-[52px]"
                >
                    Download Aplikasi Keren Ini Sekarang!
                </h1>
                <p className="font-sansPro font-normal text-lg leading-8 text-darkLight text-center mt-5">
                    Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.
                </p>
                <div className="flex flex-row justify-center items-center gap-4 mt-10">
                    <div>
                        <img src="./img/appstore.png" alt="App Store Download" />
                    </div>
                    <div>
                        <img src="./img/playstore.png" alt="Play Store Download" />
                    </div>
                </div>
            </div>
        </section>
    );
}