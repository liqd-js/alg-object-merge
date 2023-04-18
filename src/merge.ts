'use strict';

function merge( obj: any, ...patches: any[] ): any
{
    for( let data of patches )
    {
        for( let key in data )
        {
            if( data[key] === undefined ){ continue }

            if( data[key] === null  )
            {
                delete obj[key];
            }
            else if( data[key] instanceof String )
            {
                obj[key] = data[key];
            }
            else if
            (
                typeof obj[key] === 'object' && typeof data[key] === 'object' && 
                obj[key] !== null && obj[key] !== undefined && 
                !Array.isArray( obj[key] ) && !Array.isArray( data[key] )
            )
            {
                merge( obj[key], data[key] );
            }
            else
            {
                obj[key] = data[key];
            }
        }
    }

    return obj;
}

export default function ObjectMerge<T>( obj: Partial<T>, ...patches: Partial<T>[] ): T
{
    return merge( obj, ...patches ) as T;
}