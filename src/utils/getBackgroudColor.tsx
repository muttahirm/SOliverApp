export const getColor = (tag: string): string => {
    switch (tag) {
        case 'Sustainable':
            return '#007F5F';
        case 'New':
            return '#FFFFFF';
        case 'Vegan':
            return '#FFC107';
        default:
            return '#CCCCCC'; // fallback color
    }
};
