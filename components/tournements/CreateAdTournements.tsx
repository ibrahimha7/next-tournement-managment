import React from 'react'
import { TextField } from '../Fields'
import SlidOver from '../SlidOver'
import { useTranslation } from 'next-i18next';
import { Button } from '../Button';


export const CreateAdTournements = () => {
    const { t } = useTranslation()
    return (
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8" onSubmit={(e) => console.log('e', e)}>
            <TextField
                label={t("TOURNEMNET_AD_NAME")}
                id="ad name tournement"
                name="ad_title"
                type="text"
                required
            />
            <TextField
                label={t("TOURNEMNET_AD_DESCRIPTION")}
                id="ad description tournement"
                name="description"
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
                        {t("CREATE_AD")} <span aria-hidden="true">&rarr;</span>
                    </span>
                </Button>
            </div>
        </form>
    )
}
