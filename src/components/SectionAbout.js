import SectionAboutCard from "./SectionAboutCard";

export default function SectionAbout() {

    const features = [
        {
            'icon': 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
            'title': 'Aplikasi Gratis',
            'summary': 'Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.'
        },
        {
            'icon': 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
            'title': 'Kode OTP Error',
            'summary': 'Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.'
        },
        {
            'icon': 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
            'title': 'Data Tidak Aman',
            'summary': 'Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.'
        },
        {
            'icon': 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
            'title': 'Biasanya Error',
            'summary': 'Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~'
        },
    ];

    return (
        <div className="py-[100px] w-3/4 mx-auto">
            <div className="flex flex-row items-center gap-5">
                <div className="flex flex-col basis-1/3">
                    <h1
                        className="font-patuaOne text-5xl font-normal text-[#0E144A]"
                        style={{
                            width: '501px',
                            maxHeight: '180px',
                            flex: 'none',
                            order: 0,
                            alignSelf: 'stretch',
                            flexGrow: 0,
                            lineHeight: '52px',
                        }}
                    >
                        Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
                    </h1>
                    <span className="font-sansPro font-normal text-lg mt-5 text-darkLight">
                        Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
                    </span>
                    <div className="flex flex-row mt-20 justify-start">
                        <div className="flex flex-col w-1/2 items-center border-r-2 border-gray">
                            <p className="font-inter text-xs font-normal leading-4 text-darkLight">
                                TOTAL DOWNLOAD
                            </p>
                            <span className="font-inter font-semibold text-[24px] text-dark">
                                1,501,234
                            </span>
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <p className="font-inter text-xs font-normal leading-4 text-darkLight">
                                TOTAL USERS
                            </p>
                            <span className="font-inter font-semibold text-[24px] text-dark">
                                1,318,829
                            </span>
                        </div>
                    </div>
                </div>
                <div className="basis-2/3">
                    <div class="grid grid-cols-2 gap-8">
                        {
                            features.map((item) => {
                                return (
                                    <SectionAboutCard icon={item.icon} title={item.title} summary={item.summary} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}