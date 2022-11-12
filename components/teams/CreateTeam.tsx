import React, { useState } from 'react'
import { SelectField, TextField } from '../Fields'
import SlidOver from '../SlidOver'
import { useTranslation } from 'next-i18next';
import { Button } from '../Button';


export const CreateTeam = () => {
    const { t } = useTranslation()
    return (
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8" onSubmit={(e) => console.log('e', e)}>
            <TextField
                label={t("TEAM_NAME")}
                id="name"
                name="name"
                type="text"
                required
            />
            <TextField
                label={t("TEAM_DESCRIPTION")}
                id="name"
                name="name"
                type="text"
                required
            />
            <div>
                <Button
                    type="submit"
                    variant="solid"
                    color="blue"
                    className="w-full"
                >
                    <span>
                        {t("CREATE_TEAM")} <span aria-hidden="true">&rarr;</span>
                    </span>
                </Button>
            </div>
        </form>
    )
}
