import partition from './partitionList.js';

describe('Partition List', () => {
  it('Should allow 1 to equal 1', () => {
    const partitionedList = partition();

    expect(partitionedList).toEqual(1);
  });
});
