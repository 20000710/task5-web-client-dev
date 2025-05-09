import { useState } from "react";
import ChevronDown from '../../assets/images/chevron-down.png';
import Square from '../../assets/images/square.png';
import FourSquare from '../../assets/images/four-square.png';
import { useGridView } from "../../context/GridViewContext";
import { usePokemonDispatch } from "../../context/PokemonContext";


const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('Sort by');
    const { isGridView, toggleGridView } = useGridView();

    const options = ['Name (A-Z)', 'Name (Z-A)', 'Lowest Id', 'Highest Id'];
    const dispatch = usePokemonDispatch();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);

        let sortType: 'AZ' | 'ZA' | 'LOWEST_ID' | 'HIGHEST_ID';

        switch (option) {
            case 'Name (A-Z)':
                sortType = 'AZ';
                break;
            case 'Name (Z-A)':
                sortType = 'ZA';
                break;
            case 'Lowest Id':
                sortType = 'LOWEST_ID';
                break;
            case 'Highest Id':
                sortType = 'HIGHEST_ID';
                break;
            default:
                sortType = 'AZ';
        }

        dispatch({ type: 'SET_SORT_ORDER', payload: sortType });
    };

    return (
        <div className="flex justify-between items-center">
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-44 max-h-[2rem] px-4 py-2 text-[#97A0CC] mx-4 border bg-[#3D4466] border-0 rounded focus:outline-none"
                >
                    <span>{selectedOption}</span>
                    <img className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} src={ChevronDown} alt="chevron-icon" />
                </button>

                {isOpen && (
                    <div className="absolute z-10 w-44 mt-1 mx-4 bg-gray-800 border border-[#3D4466] rounded shadow-lg">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex rounded-xl overflow-hidden bg-[#272B48] mr-4">
                <button
                    className={`p-2 flex items-center cursor-pointer justify-center w-10 h-10 border-r border-r-[#A7ADCD] transition-all duration-300 ease-in-out ${!isGridView ? 'bg-[#3A406A]' : 'bg-[#1A1E38]'}`}
                    onClick={() => toggleGridView(false)}
                    aria-label="List view"
                >
                    <img src={Square} alt="square icon" />
                </button>

                <button
                    className={`p-2 flex items-center cursor-pointer justify-center w-10 h-10 transition-all duration-300 ease-in-out ${isGridView ? 'bg-[#3A406A]' : 'bg-[#1A1E38]'}`}
                    onClick={() => toggleGridView(true)}
                    aria-label="Grid view"
                >
                    <img src={FourSquare} alt="four square icon" />
                </button>
            </div>
        </div>
    )
}

export default Menu