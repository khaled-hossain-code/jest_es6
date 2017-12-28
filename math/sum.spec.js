import sum from './sum';

describe('adds', ()=> {
  it('should sum 1 + 2', ()=>{
    expect(sum(1,2)).toBe(3);
    console.log(window);
  })
});
