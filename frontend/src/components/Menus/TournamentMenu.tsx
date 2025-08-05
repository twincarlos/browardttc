'use client';
import Menu from "../StyledComponents/Menu/Menu";
import { useModal } from "@/context/ModalContext";
import EditIcon from "../StyledComponents/Icons/EditIcon";
import DeleteIcon from "../StyledComponents/Icons/DeleteIcon";

export default function TournamentsMenu() {
    const { setModalContent } = useModal();

    const options = [
        {
            label: 'Edit Tournament',
            onClick: () => {
                setModalContent(<>Edit Tournament</>);
            },
            icon: <EditIcon />
        },
        {
            label: 'Delete Tournament',
            onClick: () => {
                setModalContent(<>Delete Tournament</>);
            },
            icon: <DeleteIcon />
        }
    ]
    
    return (
        <Menu options={options} />
    );
}