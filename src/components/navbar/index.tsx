import React, { useEffect, useRef, useState } from 'react';
import lup from '../../assets/images/lup.png';
import { usePokemonDispatch } from '../../context/PokemonContext';

type NavbarProps = {
    logo: string;
};

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
    const searchRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const showInput = isHovered || isFocused;
    const dispatch = usePokemonDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })
    }

    useEffect(() => {
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
    
        const node = searchRef.current;
        if (node) {
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);
        }
    
        return () => {
            if (node) {
                node.removeEventListener('mouseenter', handleMouseEnter);
                node.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="flex justify-between items-center border-b-2 border-b-[#3D4466] px-4 py-2 mb-4">
            <img className="w-[6.063rem] h-[2.188rem]" src={logo} alt="logo" />
            <div ref={searchRef} className="relative flex items-center h-8">
                <div className={`relative flex items-center ${showInput ? 'w-[10rem]' : 'w-5'} h-[1.875rem] overflow-hidden transition-all duration-300 ease-in-out`}>
                    <input 
                        type="search"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={handleSearchChange} 
                        className={`
                            absolute inset-0 w-full h-full shadow-md border border-gray-300 bg-white rounded-lg px-4 transition-opacity duration-300 
                            ${showInput ? 'opacity-100' : 'opacity-0'} focus:outline-none focus:ring-1 focus:ring-[#3D4466] focus:border-[#3D4466]
                        `}
                        placeholder="Search..."
                    />
                    <img 
                        src={lup} 
                        alt='lup icon'
                        className={`w-5 h-5 transition-opacity duration-300 ${showInput ? 'opacity-0' : 'opacity-100'}`} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;