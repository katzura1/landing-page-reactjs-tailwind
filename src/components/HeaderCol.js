import HeaderCol1 from "./HeaderCol1";
import HeaderCol2 from "./HeaderCol2";

export default function HeaderCol() {
    return (
        <div className="flex flex-row mx-auto w-3/4 h-full gap-16">
            <HeaderCol1 />
            <HeaderCol2 />
        </div>
    );
}