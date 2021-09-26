import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee(100,"Raj",12000)).toBeTruthy();
  });
});
