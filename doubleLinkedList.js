function DoubleLinkedList() {
	var Node = function(element){
		this.element=element;
		this.next=null;
		this.prev = null;
	}
	var length = 0;
	var head = null;
	var tail = null;
	this.append = function(element){
		this.insert(length,element);
	}
	this.insert = function(position,element){

		if(position>=0 && position<=length){
			var node = new Node(element),
				current = head,
				previous,
				index=0;

				if(position===0){
					if(!head){
						head = node;
						tail = node;
					}else{
						node.next=current;
						current.prev = node;
						head = node;
					}
				}else if(position===length){
					current=tail;
					node.prev=current;
					current.next=node;
					tail=node;
				}else{
					while(index++ < position){
						previous = current;
						current = current.next;
					}
					node.next=current;
					previous.next=node;
					current.prev=node;
					node.prev=previous;
				}
				length++;
				return true;
		}else{
			return false;
		}
	}
	this.removeAt = function(position){
			if(position>-1 && position<length){
					var current=head,
						previous,
						index=0;
					if(position===0){
						head = current.next;
						if(length===1){
							tail = null;
						}else{
							head.prev= null;
						}
					}else if(position === length-1){
						current=tail;
						tail = tail.prev;
						tail.next=null;

					}else{
						while(index++ <position){
							previous = current;
							current = current.next;
						}
						previous.next = current.next;
						current.next.prev=previous;
						
					}
					length--;

					return current.element;

			}else{
				return null;
			}
	}

	this.toString = function(){
		var current = head,
			string = '';
			while(current){
				string +=','+ current.element;
				current=current.next;

			}
			return string;
	}

	this.print = function(){
		var list = this.toString();
		list = list.replace(/^,/g,'');
		console.log(list.split(','));
	}
	this.getHead = function(){
		return head;
	}
	this.getTail = function(){
		return tail;
	}
}

var dlist = new DoubleLinkedList();
dlist.append(0);
dlist.append(1);
dlist.append(2);
dlist.append(3);
console.log(dlist.removeAt(2))
dlist.print();
console.log(dlist.getHead());
console.log(dlist.getTail());
