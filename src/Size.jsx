                            // destructure
export default function Size ({size, onSelect, selectedSize}) {
    
    const isSelected = selectedSize === size;

    return (

        <button
            className={`border border-gray min-w-[53.41px] rounded-[4.01px] p-[10.68px] flex gap-[6.68px]
            flex-grow justify-center hover:bg-violet-grayish
                ${isSelected ? 'bg-violet-grayish' : '' }                
            `}  
                onclick={() => onSelect(size)}
        >
            {size}
        </button>

    )
}