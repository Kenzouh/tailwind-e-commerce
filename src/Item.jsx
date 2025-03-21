import React, { useState } from "react";
import outfit1 from './assets/outfit1.png';
import outfit2 from './assets/outfit2.png';
import outfit3 from './assets/outfit3.png';
import outfit4 from './assets/outfit4.png';

export default function Item(){
    
    return (
        <div className="flex flex-col items-center pt-[34px] px-[21px] gap-5">
            <div className="w-[330.73px] h-full flex flex-col justify-between items-center">
                <div className="w-full h-auto flex justify-center p-[5.04px] gap-[5.04px]">
                    <img 
                        src={outfit1} 
                        alt="main image"
                        className="w-[320.65px] h-[360.98px] rounded-[8.07px] object-cover"
                    />
                </div>
                <div className="w-full flex justify-center gap-[10.59px]">

                        <img 
                            src={outfit2} 
                            alt="thumbnail1"
                            className="thumbnail"
                        />

                        <img 
                            src={outfit3} 
                            alt="thumbnail2"
                            className="thumbnail"
                        />

                        <img 
                            src={outfit4} 
                            alt="thumbnail2"
                            className="thumbnail"
                        />
                </div>
            </div>
            <div className="w-full flex flex-col gap-5">
                <h4 className="text-h4 font-[600] text-black">
                    Long Sleeve Overshirt Hoodie
                </h4>
                <div className="flex gap-2.5 items-center">
                    <span className="text-h5 font-[600] text-gray line-through">$535.00</span>
                    <span className="text-h4 font-[600] text-black">$489.00</span>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <h6 className="text-h6 font-bold text-black">Description</h6>
                    <p className="text-p text-gray">Effortlessly stylish and versatile, this Long Sleeve Overshirt in perfect for layering or wearing solo. Crafted for comfort and durability, it offers a timeless look that complements any wardrobe. Ideal for casual outings or smart-casual occasions, this overshirt is a must-have staple.
                    </p>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>

            </div>
        </div>
    )
}