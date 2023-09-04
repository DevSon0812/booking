'use client';

import { Button } from '@/components/primitive';

export default function Home() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Button
                color="warning"
                variant="soft"
                size="medium"
                textTransform="capitalize"
            >
                Click me
            </Button>
        </div>
    );
}
