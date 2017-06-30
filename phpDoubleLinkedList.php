<?php
class Node {

	public function __construct($element){
		$this->element=$element;
		$this->next=null;
		$this->prev= null;
	}
}
interface Lists{

	public function insert($position,$element);

	public function removeAt($position);

	public function indexOf($element);

	public function getHead();

	public function isEmpty();

	public function size();
}
class DoubleLinkedList implements Lists{
	private $head =null;
	private $tail = null;
	private $length = 0;

	public function insert($position,$element){
			
		if($position>=0 && $position<=$this->length){
			$node = new Node($element);
			$current = $this->head;
			$previous;
			$index=0;
				if($position===0){
					if(!$this->head){
						$this->head = $node;
						$this->tail = $node;
					}else{
						$node->next = $current;
						$current->prev=$node;
						$this->head = $node;
					}
				}else if($position===$this->length){
					$current =$this->tail;
					$node->prev=$current;
					$current->next=$node;
					$this->tail = $node;
				}else{
					while($index++ < $position){
						$previous=$current;
						$current=$current->next;
					}
					$node->next =$current;
					$previous->next=$node;
					$current->prev =$node;
					$node->prev=$previous;

				}
				$this->length++;
				return true;
		}else{
			return false;
		}
	}
	public function append($element){
		return $this->insert($this->length,$element);
	}

	public function removeAt($position){
			if($position>-1 && $position <$this->length){
				$index = 0;
				$current =$this->head;
				$previous;
				if($position===0){
					if(!$this->head){
						return null;
					}else{
						$current=$current->next;
						$current->prev = null;
						$this->head = $current;
					}
				}else if($position ===$this->length-1){
						$current =$this->tail->prev;
						$current->next =null;
						$this->tail = $current;
				}else{
					while($index++ <$position){
						$previous=$current;
						$current=$current->next;
					}
						$previous->next=$current->next;
						$current->next->prev=$previous;
				}

				$this->length--;
				return $current->element;
			}else{
				return null;
			}

	}

	public function indexOf($element){
			$index =0;
			$current =$this->head;
			while ($index < $this->length) {
					if ($element === $current->element) {
						return $index;
					}
					$current=$current->next;
					$index++;
			}
			return -1;
	}

	public function getHead(){
		return $this->head;
	}

	public function isEmpty(){
		return $this->length ===0;
	}

	public function size(){
		return $this->length;
	}
	public function print(){
		$current = $this->head;
		while($current){
			print $current->element."\n";
			$current=$current->next;
		}
	}
	
}
/**
instace of object 
$list = new DoubleLinkedList();
$list->insert(0,1);
$list->insert(1,2);
$list->insert(2,3);
$list->insert(3,4);
$list->append('a');
$list->append('b');
$list->append('c');
$list->append('d');
//	$list->removeAt(2);
var_dump($list->indexOf('d'));
$list->print();
*/

