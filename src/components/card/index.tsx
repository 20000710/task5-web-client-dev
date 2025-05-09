import React from 'react'
import styles from './card.module.css'
import { useGridView } from '../../context/GridViewContext';

type CardProps = {
    name: string;
    type: string;
    idNum: number;
    image: string;
}

const Card: React.FC<CardProps> = ({ name, type, idNum, image }) => {

  return (
    <>
      <div className="rounded-xl w-[17.438rem]  h-[15rem] shadow-md p-4 my-4 bg-white border border-gray-200 max-w-sm bg-[#F0F3FF] mx-4">
          <div className='flex justify-between'>
              <h2 className={`${styles.type} ${styles[type.toLocaleLowerCase()]}`}>{type}</h2>
              <h2 className={`${styles.type}`}>#000{idNum}</h2>
          </div>
          <img className='w-[11.132rem] h-[10.813rem] mx-auto' src={image} alt={name}/>
          <p className={`${styles.name}`}>{name}</p>
      </div>
    </>
  )
}

export default Card