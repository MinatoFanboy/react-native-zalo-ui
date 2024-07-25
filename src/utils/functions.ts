import { createRef } from 'react';

import { ToastRef, ToastType } from '~/types';

export const toastRef = createRef<ToastRef>();

export const showToast = ({
    duration,
    message,
    type,
    url,
}: {
    duration?: number;
    message?: string;
    type?: ToastType;
    url?: string;
}) => {
    toastRef.current?.show({ duration, message, type, url });
};

export const isStrongPassword = (password: string | undefined) => {
    if (password) {
        let strength: number = 0;

        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        if (password.length >= minLength) {
            strength = strength + 1;
        }
        if (hasUppercase || hasLowercase || hasNumber) {
            strength = strength + 1;
        }
        if (hasSpecialChar) {
            strength = strength + 1;
        }

        return strength;
    } else {
        return 0;
    }
};

export const getRangeTen = (num: number) => {
    const quotient = Math.floor(num / 10);

    return [quotient * 10 - 1, quotient * 10 + 10];
};

export const getRange = (num: number) => {
    const quotient = Math.floor(num / 100);

    return [
        [quotient * 100 - 10, quotient * 100 - 1],
        [quotient * 100, quotient * 100 + 9],
        [quotient * 100 + 10, quotient * 100 + 19],
        [quotient * 100 + 20, quotient * 100 + 29],
        [quotient * 100 + 30, quotient * 100 + 39],
        [quotient * 100 + 40, quotient * 100 + 49],
        [quotient * 100 + 50, quotient * 100 + 59],
        [quotient * 100 + 60, quotient * 100 + 69],
        [quotient * 100 + 70, quotient * 100 + 79],
        [quotient * 100 + 80, quotient * 100 + 89],
        [quotient * 100 + 90, quotient * 100 + 99],
        [quotient * 100 + 100, quotient * 100 + 109],
    ];
};

export const getDaysInFeb = (year: number) => {
    const yearCur = new Date(year, 1);
    yearCur.setMonth(yearCur.getMonth() + 1, 0);

    return yearCur.getDate();
};

export const valueToArray = (value?: string): string[] => value?.split('') ?? [];
