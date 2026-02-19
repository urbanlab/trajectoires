

interface BoardProps {
    headers: any[]
    rows: any[][]
}

export function Board({headers, rows}: BoardProps){
    return (
        <>
            <div className="grid grid-cols-6">
                {headers.map((header, index) => (
                    <div key={index} className="bg-(--dark-grey) border-b border-black text-center p-2">
                        <p className="text-[1.5em]">{header}</p>
                    </div>
                ))}
                {rows.map((row) => (
                    row.map((r, i) => (
                        <div key={i} className=' bg-white text-center border-b border-(--select-grey) p-2'>
                            <p className='text-[1.5em]'>{r}</p>
                        </div>
                    ))
                ))}
            </div>
        </>
    )
}