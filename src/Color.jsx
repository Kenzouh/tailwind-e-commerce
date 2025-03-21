                            // destructure
export default function Color ({colorId, fill, onSelect, selectedColorId}) {
    
    const isSelected = selectedColorId === colorId;

    return (

        <div className="w-[28.84px] h-[28.84] flex items-center justify-center">
            {isSelected && (
                <div className="absolute w-[28.84px] h-[28.84px] p-[7.21px] gap-[7.21px] rounded-full border-[0.72px] border-gray"></div>
            )}

            <button
                className={`relative z-10 rounded-full ${fill} duration-200
                    ${isSelected ? 'w-[21.63px] h-[21.63px]' : 'w-[28.84px] h-[28.84px]' }
                `}  
                onclick={() => onSelect(colorId)}

            >

            </button>
        </div>
    )
}