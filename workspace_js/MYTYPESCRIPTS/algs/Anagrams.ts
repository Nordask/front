export function areAnagrams(s1: string, s2: string): boolean {
    //  O logn
    /*
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    return s1 === s2;
    */
   
    const charCount = new Map<string, number>();

    for(const char of s1.split('')) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for(const char of s2.split('')) {
        if(!charCount.has(char))
            return false;
        charCount.set(char, charCount.get(char) - 1);    
    }

    return Array.from(charCount.values()).every(val => val === 0);
}