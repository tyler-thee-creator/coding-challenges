import { partition, ListNode } from './partitionList.js';

describe('Partition List', () => {
  it('Should correctly partition a linked list with a length of 0', () => {
    const head = new ListNode();
    const partitionedList = partition(head, 0);

    expect(partitionedList.val).toEqual(0);
    expect(partitionedList.next).toEqual(null);
  });

  it('Should correctly partition a linked list with a short length', () => {
    const head = new ListNode(6);
    const node1 = new ListNode(22);
    const node2 = new ListNode(1);
    head.next = node1;
    node1.next = node2;
    const partitionedList = partition(head, 7);
    const { val: val1, next: { val: val2, next: { val: val3 } } } = partitionedList;

    expect(val1).toEqual(6);
    expect(val2).toEqual(1);
    expect(val3).toEqual(22);
  });

  it('Should correctly partition a linked list of medium sized length', () => {
    const head = new ListNode(6);
    const node1 = new ListNode(5);
    const node2 = new ListNode(2);
    const node3 = new ListNode(7);
    const node4 = new ListNode(9);
    const node5 = new ListNode(3);
    const node6 = new ListNode(1);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    const partitionedList = partition(head, 4);
    const { val: val1, next: { val: val2, next: { val: val3, next: { val: val4, next: { val: val5, next: { val: val6, next: { val: val7 } } } } } } } = partitionedList;

    expect(val1).toEqual(2);
    expect(val2).toEqual(3);
    expect(val3).toEqual(1);
    expect(val4).toEqual(6);
    expect(val5).toEqual(5);
    expect(val6).toEqual(7);
    expect(val7).toEqual(9);
  });

  it('Should correctly partition a linked list with a longh length', () => {
    const head = new ListNode(6);
    const node1 = new ListNode(15);
    const node2 = new ListNode(12);
    const node3 = new ListNode(7);
    const node4 = new ListNode(9);
    const node5 = new ListNode(13);
    const node6 = new ListNode(1);
    const node7 = new ListNode(8);
    const node8 = new ListNode(11);
    const node9 = new ListNode(5);
    const node10 = new ListNode(2);
    const node11 = new ListNode(3);
    const node12 = new ListNode(14);
    const node13 = new ListNode(16);
    const node14 = new ListNode(4);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node10;
    node10.next = node11;
    node11.next = node12;
    node12.next = node13;
    node13.next = node14;

    const partitionedList = partition(head, 10);
    const { val: val1, next: { val: val2, next: { val: val3, next: { val: val4, next: { val: val5, next: { val: val6, next: { val: val7, next: { val: val8, next: { val: val9, next: { val: val10, next: { val: val11, next: { val: val12, next: { val: val13, next: { val: val14, next: { val: val15 } } } } } } } } } } } } } } } = partitionedList;

    expect(val1).toEqual(6);
    expect(val2).toEqual(7);
    expect(val3).toEqual(9);
    expect(val4).toEqual(1);
    expect(val5).toEqual(8);
    expect(val6).toEqual(5);
    expect(val7).toEqual(2);
    expect(val8).toEqual(3);
    expect(val9).toEqual(4);
    expect(val10).toEqual(15);
    expect(val11).toEqual(12);
    expect(val12).toEqual(13);
    expect(val13).toEqual(11);
    expect(val14).toEqual(14);
    expect(val15).toEqual(16);
  });

  it('Should correctly partition a linked list where one of the values matches "x"', () => {
    const head = new ListNode(222);
    const node1 = new ListNode(223);
    const node2 = new ListNode(100000300030);
    const node3 = new ListNode(1);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    const partitionedList = partition(head, 223);
    const { val: val1, next: { val: val2, next: { val: val3, next: { val: val4 } } } } = partitionedList;

    expect(val1).toEqual(222);
    expect(val2).toEqual(1);
    expect(val3).toEqual(223);
    expect(val4).toEqual(100000300030);
  });
});
