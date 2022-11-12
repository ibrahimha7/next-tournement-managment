import SlidOver from "./SlidOver"
import { CreateTeam } from "./teams/CreateTeam"
import { CreateAdTournements } from "./tournements/CreateAdTournements"
import { AddUser } from "./users/AddUser"
import { useTranslation } from 'next-i18next';
import { useState } from "react";

interface IProps {
    action: 'ADD_USER' | 'CREATE_TEAM' | 'CRERATE_TOURNENEMT_AD',

}
export const Actions = ({ action }: IProps) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    const renderActionType = () => {
        switch (action) {
            case 'CREATE_TEAM':
                return (
                    <CreateTeam />
                )
            case 'CRERATE_TOURNENEMT_AD':
                return (
                    <CreateAdTournements />
                )
            default:
                return (
                    <AddUser />
                )
        }
    }


    return (
        <div>
            <button
                type="button"
                className={"inline-flex items-end justify-end rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"}
                onClick={() => setOpen(true)}
            >
                {t(action)}
            </button>
            <SlidOver open={open} setOpen={setOpen} title={t(action)}>
                {renderActionType()}
            </SlidOver>
        </div >
    )


}