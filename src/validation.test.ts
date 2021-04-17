import {doesTriangleExist} from './validation';
describe('function doesTriangleExist', ()=>{
  it('should say that a triangle does exist', ()=>{
    // arrange
    const sideA = 1;
    const sideB = 2;
    const sideC = 2;
    // act
    const result = doesTriangleExist(sideA, sideB, sideC);
    // assert
    expect(result).toBeTruthy();
  });

  it('should say that a triangle not does exist', ()=>{
    // arrange
    const sideA = 1;
    const sideB = 2;
    const sideC = 4;
    // act
    const result = doesTriangleExist(sideA, sideB, sideC);
    // assert
    expect(result).toBeFalsy();
  });
});
