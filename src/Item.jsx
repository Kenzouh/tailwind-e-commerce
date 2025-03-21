import React, { useState } from "react";
import outfit1 from './assets/outfit1.png';
import outfit2 from './assets/outfit2.png';
import outfit3 from './assets/outfit3.png';
import outfit4 from './assets/outfit4.png';

export default function Item(){
    
    return (
        <div className="flex flex-col item-center text-h1 font-bold pt-[34px] px-[21px] gap-5">
            <div className="w-[330.73px] h-[371.07px] flex flex-col justify-between items-center">
                <div className="w-full h-auto flex justify-center p-[5.04px] gap-[5.04px]">
                    <img 
                        src={outfit1} 
                        alt="main image"
                        className="w-[320.65px] h-[360.98] rounded-[8.07px] object-cover"
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
            <div className="flex flex-col gap-5">

            </div>
            <div>

            </div>
        </div>
    )
}