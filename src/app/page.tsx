"use client";
export default function Home() {
    return (
        <>
            <div
                className="text-center font-bold w-2/3 h-1/3  flex flex-col items-center justify-end"
                style={{ fontSize: "30px" }}
            >
                sydneyot.com
                <br />
            </div>
            <div
                className="h-1/3 flex flex-col items-center justify-end"
                style={{ fontSize: "15px" }}
            >
                <div className="text-center flex flex-wrap justify-center items-end gap-x-2">
                    <div>Copyright ©{new Date().toISOString().slice(0, 4)}</div>
                    <div>All rights reserved.</div>
                </div>
                <div className="text-center flex flex-wrap justify-center items-center gap-x-2">

                </div>
            </div>
        </>
    );
}
