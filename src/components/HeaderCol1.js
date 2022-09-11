export default function HeaderCol1() {
    return (
        <div className="flex flex-col mx-auto w-[501px]">
            <h1
                className="font-patuaOne text-5xl font-normal text-[#0E144A]"
                style={{
                    width: '501px',
                    maxHeight: '180px',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    lineHeight: '60px',
                }}
            >
                Sebuah cara mudah mengatur jadwal kuliah kamu
            </h1>
            <span className="font-sansPro font-normal text-lg mt-2.5">
                Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~
            </span>
            <div className="flex flex-row mt-10 gap-3">
                <button className="bg-primary text-white px-16 py-4 rounded-md shadow-lg shadow-shadowPrimary" >
                    Learn More
                </button>
                <button className="bg-primaryLight text-primary px-16 py-4 rounded-md shadow-lg shadow-shadowPrimary">
                    Play Demo
                </button>
            </div>
            <div className="relative mt-20 justify-center items-center" style={{
                height: '253px',
            }}>
                <div className="bg-white h-2/4 mt-3 w-11/12 absolute items-center left-10 top-10 rounded shadow-lg shadow-shadowPrimary">

                </div>
                <div className="bg-white h-3/4 mt-3 w-11/12 absolute items-center left-5 top-5 rounded shadow-lg shadow-shadowPrimary">

                </div>
                <div className="bg-white h-full mt-3 w-11/12 absolute items-center rounded p-7 shadow-lg shadow-shadowPrimary">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row justify-start items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF" stroke="#FFFFFF" className="w-5 h-5 bg-yellow-300">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-5 h-5 bg-gray-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-5 h-5 bg-gray-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-5 h-5 bg-gray-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </div>

                        <span className="mt-5 font-poppins font-normal text-sm leading-6" style={{
                            height: "78px",
                        }}>
                            “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”
                        </span>

                        <div className="flex flex-row mt-5 gap-3 justify-between">
                            <img src="./img/avatar.png" alt="avatar" style={{
                                height: "55px",
                                width: "55px",
                            }} />
                            <div>
                                <span className="font-poppins font-medium text-xl leading-6 block">P-Star 7</span>
                                <span className="font-poppins font-medium text-xs leading-4 text-darkLight">Mahasiswa Boating School Ny. Puff</span>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-3">
                                <button className="bg-primaryLight rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FE5E44" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="bg-primaryLight rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FE5E44" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}