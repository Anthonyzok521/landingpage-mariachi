'use client';

export const CardsEventsSkeleton = () => {
    return <div className="flex overflow-hidden gap-4 rounded-xl border border-gray-200 shadow-lg min-h-20 max-h-44 lg:scale-75 animate-pulse">
        <div className='flex flex-col w-full max-md:z-10 gap-2 p-2'>
            <span className="p-2 font-bold text-gray-600 text-sm bg-white/20 animate-pulse"></span>
            <div className="flex flex-col justify-start w-44 overflow-auto">
                <h2 className={`p-2 font-bold bg-white/20 animate-pulse`}></h2>
                <span className={`transition-all pl-2 bg-white/20 animate-pulse`}></span>
                <span className="text-sm hover:bg-slate-300/30 rounded-md p-2 select-none max-w-max bg-white/20 animate-pulse"></span>
            </div>
            <span className="hidden p-2 md:flex items-center gap-1 bg-white/20 animate-pulse"></span>
        </div>
        <div className=' max-md:w-full p-2'>            
            <div className="w-full h-full lg:p-10 rounded-md bg-white/20 animate-pulse"></div>
        </div>
    </div>
}