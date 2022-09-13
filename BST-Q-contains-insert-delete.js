// Average: O(log(n)) time |O(logn) space 
//Worst : O(n) time | O(n) space 
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
        if(value < this.value){
            if(this.left === null){
                this.left = new BST(value);
            }
            else{
                this.left.insert(value);
          }
        }
        else{
  
             if(this.right === null)
                {this.right = new BST(value);
              }
            
          else{
              this.right.insert(value)
                }
            
        }
      return this;
    }
// Average: O(log(n)) time |O(logn) space 
//Worst : O(n) time | O(n) space  
    contains(value) {
        if (value < this.value){
            if( this.left === null){
                return false;
            }
            else{
                return this.left.contains(value);
            }
  
        }
        else if(value > this.value){
            if( this.right === null){
                return false;
            }
            else{
                return this.right.contains(value);
            }
  
        }
        else{ return true;
      }
      
    }
// Average: O(log(n)) time |O(logn) space 
//Worst : O(n) time | O(n) space   
    remove(value, parent = null) {
        if(value < this.value){
            if(this.left !== null){
                this.left.remove(value, this);
            }
        }
        else if (value > this.value){
            if(this.right !== null){
                this.right.remove(value,this);
            }
        }
        else{
  
  //both left & right children are not null
  //2 cases - one PARENT IS NULL for both the cases below  ; second parent is there for the below cases
  // one is not null (one is null)                            
  //       this 
  //     /      \
  //    /         \
  //  leftChild   none
  //OR
  //       this 
  //     /      \
  //    /         \
  //  none   rightChild
            
            if(this.left !== null && this.right!== null){
                this.value = this.right.getMinValue();
                this.right.remove(this.value,this); 
            }
            else if(parent === null){
                if(this.left !== null){
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                }
                else if(this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right= this.right.right;
                }
                else{
                    //
                }
            }
            else if(parent.left === this){
                parent.left = this.left !== null ?this.left : this.right;
            }
            else if( parent.right === this){
                parent.right = this.left !== null ? this.left: this.right;
            }
  }
   
      return this;
    }
  
    getMinValue(){
        if(this.left === null){
            return this.value;
        }else{
            return this.left.getMinValue();
        }
    }
  
  }
  
  
  exports.BST = BST;
  