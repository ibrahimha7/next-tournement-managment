import React, { useState } from 'react'
import { SelectField, TextField } from '../Fields'
import SlidOver from '../SlidOver'
import { useTranslation } from 'next-i18next';
import { Button } from '../Button';


export const AddUser = () => {
    const { t } = useTranslation()
    return (
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8" onSubmit={(e) => console.log('e', e)}>
            <TextField
                label={t("USERNAME")}
                id="username"
                name="username"
                type="text"
                required
            />
            <TextField
                label={t("EMAIL")}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
            />
            <SelectField
                className="col-span-full"
                label={t('USER_TYPE')}
                id="referral_source"
                name="userType"
            >
                <option value={'player'}>{t('PLAYER')}</option>
                <option value={'manager'}>{t('MANAGER')}</option>
                <option value={'refree'}>{t('REFREE')}</option>
                <option value={'coach'}>{t('COACH')}</option>
            </SelectField>

            <TextField
                label={t("FIRST_NAME")}
                id="first name"
                name="first_name"
                type="text"
                required
            />
            <TextField
                label={t("SECOUND_NAME")}
                id="secound name"
                name="second_name"
                type="text"
                required
            />
            <TextField
                label={t("FAMLIY_NAME")}
                id="famliy name"
                name="famliy_name"
                type="text"
                required
            />
            <TextField
                label={t("PHONE_NUMBER")}
                id="phone number"
                name="phone_number"
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
                    {t("ADD_USER")}
                </Button>
            </div>
        </form>
    )
}
