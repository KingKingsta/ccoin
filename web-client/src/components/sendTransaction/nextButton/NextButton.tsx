import React from 'react';

export interface INextButton {
    sampleTextProp: string;
    samplePriceProp: string;
}

const NextButton: React.FC<INextButton> = ({
    sampleTextProp,
    samplePriceProp,
}) => {
    return (
        <button className="rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5 bg-[#3087D9] text-[#f1f1f1] w-full h-10">
            <span>{sampleTextProp}</span>
            <span>{samplePriceProp}</span>
        </button>
    );
};

export default NextButton;
