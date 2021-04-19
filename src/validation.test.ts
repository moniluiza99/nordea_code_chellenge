import {doesTriangleExist} from './validation';
describe('function doesTriangleExist', ()=>{
  it('should say that a triangle does exist', ()=>{
    // arrange
    const sideA:number = 1;
    const sideB:number = 2;
    const sideC:number = 2;
    // act
    const result:boolean = doesTriangleExist(sideA, sideB, sideC);
    // assert
    expect(result).toBeTruthy();
  });

  it('should say that a triangle not does exist', ()=>{
    // arrange
    const sideA:number = 1;
    const sideB:number = 2;
    const sideC:number = 4;
    // act
    const result:boolean = doesTriangleExist(sideA, sideB, sideC);
    // assert
    expect(result).toBeFalsy();
  });
});
