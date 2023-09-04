import { ButtonVariantType, ColorType, SizeType, TextTransformType } from '@/interfaces';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Spin } from '..';

interface IButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: ColorType;
    size?: SizeType;
    variant?: ButtonVariantType;
    textTransform?: TextTransformType;
    className?: string;
    shape?: 'rounded' | 'circle' | 'none';
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    children?: ReactNode;
    isLoading?: boolean;
}

const buttonConfig = {
    size: {
        small: {
            none: 'py-0.5 px-2 text-sm rounded',
            circle: 'p-0 w-6 h-6 text-sm rounded-full flex items-center justify-center',
            rounded: 'p-0 w-6 h-6 text-sm rounded flex items-center justify-center',
        },
        medium: {
            none: 'px-4 py-1 text-sm rounded-md',
            circle: 'p-0 w-8 h-8 text-sm rounded-full flex items-center justify-center',
            rounded: 'p-0 w-8 h-8 text-sm rounded-md flex items-center justify-center',
        },
        large: {
            none: 'px-5 py-1.5 text-normal rounded-lg',
            circle: 'p-0 text-normal w-10 h-10 rounded-full flex items-center justify-center',
            rounded: 'p-0 text-normal w-10 h-10 rounded-lg flex items-center justify-center',
        },
    },
    contained: {
        primary:
            'bg-primary-500 text-white border border-primary-500 hover:(bg-primary-300 border-primary-300) disabled:hover:(bg-primary-500 border-primary-500)',
        secondary:
            'bg-secondary-500 text-white border border-secondary-500 hover:(bg-secondary-300 border-secondary-300) disabled:hover:(bg-secondary-500 border-secondary-500)',
        info: 'bg-info-500 text-white border border-info-500 hover:(bg-info-300 border-info-300) disabled:hover:(bg-info-500 border-info-500)',
        success:
            'bg-success-500 text-white border border-success-500 hover:(bg-success-300 border-success-300) disabled:hover:(bg-success-500 border-success-500)',
        warning:
            'bg-warning-500 text-white border border-warning-500 hover:(bg-warning-300 border-warning-300) disabled:hover:(bg-warning-500 border-warning-500)',
        error: 'bg-error-500 text-white border border-error-500 hover:(bg-error-300 border-error-300) disabled:hover:(bg-error-500 border-error-500)',
    },
    soft: {
        primary:
            'bg-primary-100 text-primary-500 border border-primary-100 hover:(bg-primary-500 text-white border-primary-500) disabled:hover:(bg-primary-100 text-primary-500 border-primary-50)',
        secondary:
            'bg-secondary-100 text-secondary-500 border border-secondary-100 hover:(bg-secondary-500 text-white border-secondary-500) disabled:hover:(bg-secondary-100 text-secondary-500 border-secondary-50)',
        info: 'bg-info-100 text-info-500 border border-info-100 hover:(bg-info-500 text-white border-info-500) disabled:hover:(bg-info-100 text-info-500 border-info-50)',
        success:
            'bg-success-100 text-success-500 border border-success-100 hover:(bg-success-500 text-white border-success-500) disabled:hover:(bg-success-100 text-success-500 border-success-50)',
        warning:
            'bg-warning-100 text-warning-500 border border-warning-100 hover:(bg-warning-500 text-white border-warning-500) disabled:hover:(bg-warning-100 text-warning-500 border-warning-50)',
        error: 'bg-error-100 text-error-500 border border-error-100 hover:(bg-error-500 text-white border-error-500) disabled:hover:(bg-error-100 text-error-500 border-error-50)',
    },
    outlined: {
        primary:
            'bg-transparent text-primary-500 border border-primary-500 hover:(bg-primary-500 text-white) disabled:hover:(bg-transparent text-primary-500 border-primary-500)',
        secondary:
            'bg-transparent text-secondary-500 border border-secondary-500 hover:(bg-secondary-500 text-white) disabled:hover:(bg-transparent text-secondary-500 border-secondary-500)',
        info: 'bg-transparent text-info-500 border border-info-500 hover:(bg-info-500 text-white) disabled:hover:(bg-transparent text-info-500 border-info-500)',
        success:
            'bg-transparent text-success-500 border border-success-500 hover:(bg-success-500 text-white) disabled:hover:(bg-transparent text-success-500 border-success-500)',
        warning:
            'bg-transparent text-warning-500 border border-warning-500 hover:(bg-warning-500 text-white) disabled:hover:(bg-transparent text-warning-500 border-warning-500)',
        error: 'bg-transparent text-error-500 border border-error-500 hover:(bg-error-500 text-white) disabled:hover:(bg-transparent text-error-500 border-error-500)',
    },
    text: {
        primary:
            'text-primary-500 border border-transparent hover:(bg-primary-100 border-primary-50) disabled:hover:(text-primary-500 border-transparent)',
        secondary:
            'text-secondary-500 border border-transparent hover:(bg-secondary-100 border-secondary-50) disabled:hover:(text-secondary-500 border-transparent)',
        info: 'text-info-500 border border-transparent hover:(bg-info-100 border-info-50) disabled:hover:(text-info-500 border-transparent)',
        success:
            'text-success-500 border border-transparent hover:(bg-success-100 border-success-50) disabled:hover:(text-success-500 border-transparent)',
        warning:
            'text-warning-500 border border-transparent hover:(bg-warning-100 border-warning-50) disabled:hover:(text-warning-500 border-transparent)',
        error: 'text-error-500 border border-transparent hover:(bg-error-100 border-error-50) disabled:hover:(text-error-500 border-transparent)',
    },
} as const;

export default function Button({
    color = 'primary',
    size = 'medium',
    variant = 'contained',
    textTransform = 'uppercase',
    className,
    children,
    shape = 'none',
    fullWidth = false,
    startIcon,
    endIcon,
    isLoading = false,
    ...rest
}: IButtonProps) {
    return (
        <button
            className={`transform transition transition-all duration-200 flex items-center justify-center gap-3 focus:(ring ring-3 ring-primary-100) ${
                buttonConfig.size[size][shape]
            } ${buttonConfig[variant][color]} ${textTransform} ${
                fullWidth ? 'w-full' : 'w-max'
            } disabled:(opacity-50) ${isLoading ? '!cursor-auto' : ''} ${
                rest.disabled ? 'cursor-not-allow' : ''
            } ${className || ''}`}
            disabled={isLoading || rest.disabled}
            {...rest}
        >
            {startIcon}
            {isLoading ? (
                <Spin
                    size={size}
                    color={color}
                />
            ) : (
                children
            )}
            {endIcon}
        </button>
    );
}
