class LinkedList{
  constructor(){
    this.head = null;

  }
  unshift(item)
  {
    //add the new item at the start of my linkedlist
    let node = new Node(item, this.head);
    // node.previus = this.head; --for double linkedlist
    this.head = node;
  }
  print(){
    //this will print each node in my list
    let node = this.head;

    while(node){
      console.log(node.value);
      node = node.next;
    }
  }
}
class Node{
  constructor(value, next){
    this.value = value;
    this.next = next;
    // this.previus = null; ---for double linkedlist
  }
}
