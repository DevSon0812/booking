import { ColorType, SizeType } from '@/interfaces';

interface ISpinProps {
    size?: SizeType;
    color?: ColorType;
    className?: string;
}

const loadingConfig = {
    size: {
        small: 'h-4 w-4 border-2',
        medium: 'h-5 w-5 border-3',
        large: 'h-6 w-6 border-3',
    },
} as const;

export function Spin({ size = 'medium', color, className }: ISpinProps) {
    return (
        <span
            className={`${loadingConfig.size[size]} block rounded-full border-t-${color}-300 animate-spin ${className}`}
        />
    );
}
