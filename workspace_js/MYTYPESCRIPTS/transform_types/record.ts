//let dictionary: { [key: string]: any } = {};
let dictionary: Record<string, typeof item> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'js02js9',
    next: '8nlksjsk'
}

// numbers are coerced to String 
dictionary[0] = item;