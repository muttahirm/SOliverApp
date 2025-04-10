export const getTextColor = (tag: string): string => {
    switch (tag) {
        case 'Sustainable':
            return '#FFFFFF';
        case 'New':
            return '#000000';
        case 'Vegan':
            return '#FFFFFF';
        default:
            return '#FFFFFF'; // fallback color
    }
};
