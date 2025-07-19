'use client';
import Menu from "../StyledComponents/Menu/Menu";
import PlusIcon from "../StyledComponents/Icons/PlusIcon";

export default function TournamentsMenu() {
    const options = [
        {
            label: 'Create Tournament',
            onClick: () => {},
            icon: <PlusIcon />
        }
    ]
    
    return (
        <Menu options={options} />
    );
}