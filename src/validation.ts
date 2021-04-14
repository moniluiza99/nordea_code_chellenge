/**
 * This  function tells us if a triangle exist
 * given 3 sides
 * @function
 * @param {number} sideA
 * @param {number} sideB
 * @param {number} sideC
 * @return {boolean}
 * @example
 * doesTriangleExist(1,2,3);
 */

export function doesTriangleExist(sideA:number, sideB:number, sideC:number){
    let longSide:number = sideA;
    let shortSides:number[] = [];

    if(longSide<sideB){
        shortSides.push(longSide);
        longSide = sideB;
        
    }else{
        shortSides.push(sideB);
    }

    if(longSide<sideC){
        shortSides.push(longSide);
        longSide = sideC;
        
    }else{
        shortSides.push(sideC);
    }


    return longSide<shortSides[0]+shortSides[1];
}