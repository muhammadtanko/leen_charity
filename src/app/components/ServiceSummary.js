export const ServiceSummary = () => {
    return (
        <div className="m-[35px]">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <span className="font-medium text-xs md:text-6xl text-primary">595+</span>
                    <span className="text-dark text-[6px] md:text-2xl font-normal">Donation Received</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-xs md:text-6xl text-primary">48M</span>
                    <span className="text-dark text-[6px] md:text-2xl font-normal">Money Donated</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-xs md:text-6xl text-primary">35+</span>
                    <span className="text-dark text-[6px] md:text-2xl font-normal">Active Campaigns</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-xs md:text-6xl text-primary">N5000</span>
                    <span className="text-dark text-[6px] md:text-2xl font-normal">Opened Charity</span>
                </div>
            </div>
        </div>
    )
}