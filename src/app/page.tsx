import Link from "next/link";
export default function Home() {
    return (
        <>
            <div
                className="h-full flex w-1/2 flex-col items-center justify-center"
                style={{ fontSize: "15px" }}
            >
                <div className="text-center flex flex-wrap justify-center items-center gap-x-2">
                    <div>Copyright ©{new Date().toISOString().slice(0, 4)} Sydney OT.</div>
                    <div>All rights reserved.</div>
                </div>
                <div className="text-center flex flex-wrap justify-center items-center gap-x-2">
                    Site made by Stanley
                </div>
            </div>
            <div
                className="font-bold h-52 flex flex-col items-center justify-center"
                style={{ fontSize: "15px" }}
            >
                <p className="font-extrabold ">Useful links</p>
                <Link className="underline" href={"/signpad"}>
                    Signature Pad
                </Link>
            </div>
        </>
    );
}
