'use client';
import Menu from "../StyledComponents/Menu/Menu";
import { useModal } from "@/context/ModalContext";
import PlusIcon from "../StyledComponents/Icons/PlusIcon";
import CreateTournamentForm from "../Forms/Tournament/CreateTournamentForm";

export default function TournamentsMenu() {
    const { setModalContent } = useModal();

    const options = [
        {
            label: 'Create Tournament',
            onClick: () => {
                setModalContent(<CreateTournamentForm />);
            },
            icon: <PlusIcon />
        }
    ]
    
    return (
        <Menu options={options} />
    );
}