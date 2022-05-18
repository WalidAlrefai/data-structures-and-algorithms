const {BT} = require('../../Trees/binaryTree');
const tree_intersection = require('../intersection.js');
const Node = require('../../Trees/node');
let tree1 = null ;
let tree2 = null ;
let tree3 = null ;
describe('tree_intersection', () => {
  beforeAll(() => {
    let one1 = new Node('150');
    let two1 = new Node('100');
    let three1 = new Node('250');
    let four1 = new Node('75');
    let five1 = new Node('160');
    let six1 = new Node('200');
    let seven1 = new Node('350');
    let eight1 = new Node('125');
    let nine1 = new Node('175');
    let ten1 = new Node('300');
    let eleven1 = new Node('500');

    one1.left = two1;
    one1.right = three1;
    two1.left = four1;
    two1.right = five1;
    three1.left = six1;
    three1.right = seven1;
    five1.left = eight1;
    five1.right = nine1;
    seven1.left = ten1;
    seven1.right = eleven1;

    let one2 = new Node('42');
    let two2 = new Node('100');
    let three2 = new Node('600');
    let four2 = new Node('15');
    let five2 = new Node('160');
    let six2 = new Node('200');
    let seven2 = new Node('350');
    let eight2 = new Node('125');
    let nine2 = new Node('175');
    let ten2 = new Node('4');
    let eleven2 = new Node('500');

    one2.left = two2;
    one2.right = three2;
    two2.left = four2;
    two2.right = five2;
    three2.left = six2;
    three2.right = seven2;
    five2.left = eight2;
    five2.right = nine2;
    seven2.left = ten2;
    seven2.right = eleven2;
    tree1 = new BT(one1);
    tree2 = new BT(one2);
  });
  it('should return an array', () => {
    let output = tree_intersection(tree1, tree2);
    expect(output).toEqual([100,160,125,175,200,350,500]);
  });
  beforeAll(() => {
    let one1 = new Node(150);
    let two1 = new Node(100);
    let three1 = new Node(250);
    let four1 = new Node(75);
    let five1 = new Node(160);
    let six1 = new Node(200);
    let seven1 = new Node(350);
    let eight1 = new Node(125);
    let nine1 = new Node(175);
    let ten1 = new Node(300);
    let eleven1 = new Node(500);

    one1.left = two1;
    one1.right = three1;
    two1.left = four1;
    two1.right = five1;
    three1.left = six1;
    three1.right = seven1;
    five1.left = eight1;
    five1.right = nine1;
    seven1.left = ten1;
    seven1.right = eleven1;

    let one2 = new Node(42);
    let two2 = new Node(100);
    let three2 = new Node(600);
    let four2 = new Node(15);
    let five2 = new Node(160);
    let six2 = new Node(200);
    let seven2 = new Node(350);
    let eight2 = new Node(125);
    let nine2 = new Node(175);
    let ten2 = new Node(4);
    let eleven2 = new Node(500);

    one2.left = two2;
    one2.right = three2;
    two2.left = four2;
    two2.right = five2;
    three2.left = six2;
    three2.right = seven2;
    five2.left = eight2;
    five2.right = nine2;
    seven2.left = ten2;
    seven2.right = eleven2;



    tree1 = new BT(one1);
    tree2 = new BT(one2);


  });
  it('should return an array', () => {
    let output = tree_intersection(tree1, tree2);
    expect(output).toEqual([100,160,125,175,200,350,500]);
  });
  it('if tree2 is empty, should return an empty array', () => {
    let output = tree_intersection(tree1, tree3);
    expect(output).toEqual([]);
  });
});
