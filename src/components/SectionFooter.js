export default function SectionFooter(props) {
    return (
        <section className="section-footer p-[100px]">
            <div className="flex flex-row gap-8">
                <div className="flex flex-col items-start justify-start basis-2/4 gap-5">
                    <img src={props.image} alt="Logo" />
                    <span className="font-patuaOne font-semibold text-lg leading-5">
                        Zeitplan
                    </span>
                    <p className="font-sansPro text-base leading-[26px] text-darkLight">
                        Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start basis-1/4 gap-5">
                    <h3 className="font-patuaOne font-semibold text-lg leading-5">
                        Sitemap
                    </h3>
                    <ul className="flex flex-col gap-[10px]">
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Beranda</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Fitur-fitur</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Harga</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Testimoni</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Download</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start basis-1/4 gap-5">

                    <h3 className="font-patuaOne font-semibold text-lg leading-5">
                        Partner
                    </h3>
                    <ul className="flex flex-col gap-[10px]">
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Sefan.ru</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Ganool</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Waptrick</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Stafaband</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">MyWapBlog</li>
                        <li className="font-patuaOne text-darkLight font-semibold text-base leading-[26px]">Friv</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start basis-1/4 gap-5">

                    <h3 className="font-patuaOne font-semibold text-lg leading-5">
                        Tetep Terhubung
                    </h3>
                    <p className="font-sansPro text-darkLight font-normal text-base leading-[26px]">Lihat kami pansos di sosial media berikut:</p>
                    <div className="flex flex-row items-center justify-center">
                        <button className="rounded-full bg-primaryExtraLight p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FE5E44" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </button>
                        <button className="rounded-full bg-primaryExtraLight p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FE5E44" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </button>
                        <button className="rounded-full bg-primaryExtraLight p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FE5E44" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <p className="font-patuaOne font-semibold text-sm leading-[18px] text-darkLight tracking-wider text-center mt-4">
                COPYRIGHT (C) {new Date().getFullYear()}. <br />
                DESIGN BY NAUVAL, SLICING UI BY DENNY <br />
                CREATED WITH REACTJS & TAILWINDCSS
            </p>
        </section>
    );
}