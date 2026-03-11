export default function CustomersGridSection() {
    return (
        <section className="py-30">
            <div className="page-width space-y-20">
                <header className="flex flex-col space-y-1">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight">
                        Meet the founders like you who chose to grow with Automotiv
                    </h2>
                </header>
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <div className="aspect-6/4 grid place-items-center border-r border-b">
                        <img src="https://framerusercontent.com/images/r460TShC3vPmDSlt33D6qGyfw.svg?width=151&height=37" alt="" />
                    </div>
                    <div className="aspect-6/4 grid place-items-center lg:border-r border-b">
                        <img src="https://framerusercontent.com/images/HiGAuMpQ2cZIqZAoeisAZ0Wf0k.svg?width=99&height=29" alt="" />
                    </div>
                    <div className="aspect-6/4 grid place-items-center max-lg:border-r border-b">
                        <img src="https://framerusercontent.com/images/Qwup2aFsHBvFPna2irxUJcwMo.svg?width=154&height=37" alt="" />
                    </div>
                    <div className="aspect-6/4 grid place-items-center max-lg:border-b lg:border-r">
                        <img src="https://framerusercontent.com/images/1l9i5n4v2OoLhJTtl2wevJbn2DM.svg?width=100&height=25" alt="" />
                    </div>
                    <div className="aspect-6/4 grid place-items-center border-r">
                        <img src="https://framerusercontent.com/images/vNWaR5nx51nsA2XoOA1k7tzVS4.svg?width=157&height=37" alt="" />
                    </div>
                    <div className="aspect-6/4 grid place-items-center">
                        <img src="https://framerusercontent.com/images/DSbo74GOzmDkI2lPs0sk6E4eZM.svg?width=100&height=25" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}