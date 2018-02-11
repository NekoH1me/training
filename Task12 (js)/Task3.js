console.log('Task3');

function Child(next, number) {
    this.next = next;
    this.number = number;
  }
Child.prototype.eat = function(apples) {
    apples = apples - Math.round(Math.random() * 2 + 1);

    if(apples <= 0) {
        console.log('I`m a child number ' + this. number + ' and I transfer 0 apple to the next');
        console.log('Neener-neener! I`m glutton! And now are no apples for transfer to the next child. ' +
                                                                   'However, can you don`t tell about this my parents, please?');
        } else
        console.log('I`m a child number ' + this. number + ' and I transfer '  +  apples +  ' apple to the next');
    if(this.next && apples > 0) {
        this.next.eat(apples);
    }
 }

const boy4 = new Child(null,7);
const girl3= new Child(boy4,6);
const boy3 = new Child(girl3,5);
const girl2= new Child(boy3,4);
const boy2 = new Child(girl2,3);
const girl1= new Child(boy2,2);
const boy1 = new Child(girl1,1);

var firstChild = boy1;

firstChild.eat(10);