
export const DivFetchIndicator = ({}) => {
    return (
    
            <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full capitalize">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="shadow-md relative overflow-hidden"
                    >
                        <div className="animate-pulse">
                            <div className='w-full h-5 bg-gray-300'></div>
                            <div className="w-full h-[14rem] bg-gray-400"></div>
                            <div className="p-4">
                                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       
    )
}