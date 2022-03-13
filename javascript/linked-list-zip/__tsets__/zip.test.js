const LinkedList = require('../index.js');

describe('testing Linked List', () => {

  it('testing zipList method:', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const list3 = new LinkedList();


    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    list2.append(6);

    list3.zipList(list1, list2);

    expect(list3.toString()).toBe('{1} ->{2} ->{3} ->{4} ->{5} ->{6} ->Null');

  });
});
