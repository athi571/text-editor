export const loadFont = (fontFamily: string, fontWeight: string, italic: boolean) => {
    const linkId = `google-font-${fontFamily.replace(/\s+/g, '-')}-${fontWeight}-${italic ? 'italic' : 'normal'}`;
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        const italicParam = italic ? 'ital,' : '';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:${italicParam}wght@${italic ? '1,' : ''}${fontWeight}&display=swap`;
        document.head.appendChild(link);
    }
};
