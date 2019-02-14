import * as lodash from 'lodash';

declare module 'lodash' { // Cannot augment module '_' with value exports because it resolves to a non-module entity.
    //export function chunk(collection: any, size?: number): any[][]
    interface LoDashStatic {
        log(item: string): void;
    }
}