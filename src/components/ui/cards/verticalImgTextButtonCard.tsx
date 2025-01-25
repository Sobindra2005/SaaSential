import React from 'react';
import Image from 'next/image'

interface VerticalImgTextButtonCardProps {
    imageUrl: string;
    title: string;
    description: string;
  
    onButtonClick: () => void;
}

const VerticalImgTextButtonCard: React.FC<VerticalImgTextButtonCardProps> = ({ imageUrl, title, description, onButtonClick }) => {
    return (
        <div onClick={onButtonClick} className=" hover:border-secondary hover:bg-gray-800 flex flex-col items-center border border-border rounded-lg p-4 w-[18rem] h-[18rem] justify-between ">
            <div className='w-full flex justify-center p-4'> 
                <Image height={200} width={600} src={imageUrl} alt={title} className="w-24 h-24 object-cover object-center   rounded-t-lg " />
            </div>
            <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">{title}</h2>
            <p className="text-center text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default VerticalImgTextButtonCard;