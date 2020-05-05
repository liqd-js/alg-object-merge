'use strict';

module.exports = function ObjectMerge( obj, ...patches )
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
            else if
            (
                typeof obj[key] === 'object' && typeof data[key] === 'object' && 
                obj[key] !== null && obj[key] !== undefined && 
                !Array.isArray( obj[key] ) && !Array.isArray( data[key] )
            )
            {
                ObjectMerge( obj[key], data[key] );
            }
            else
            {
                obj[key] = data[key];
            }
        }
    }

    return obj;
}