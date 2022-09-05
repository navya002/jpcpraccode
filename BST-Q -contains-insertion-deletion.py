    # Average : O(log(n)) time | O(log(n)) space
    # Worst : O(n) time | O(n) space   
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def getMinValue(self):
        if self.left is None:
            return self.value
        else:
            return self.left.getMinValue()
            
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST (value)
            else:
                self.right.insert(value)
        return self

    # Average : O(log(n)) time | O(log(n)) space
    # Worst : O(n) time | O(n) space       
    def contains(self, value):
        if value < self.value:
            if self.left is None:
                return False
            else:
                return self.left.contains(value)
        elif value > self.value :
            if self.right is None:
                return False
            else:
                return self.right.contains(value)
        else:
            return True
                
                

    # Average : O(log(n)) time | O(log(n)) space
    # Worst : O(n) time | O(n) space   
    def remove(self, value, parent =None):
        if value < self.value:
            #for cases when the value does not exist in the tree
            if self.left is not None :      
                self.left.remove (value , self)
        elif value > self.value :
            #for cases when the value does not exist in the tree
            if self.right is not None:
                self.right.remove (value , self)
        else:
            if self.left is not None and self.right is not None:
                #The Case where it has both the children present
                self.value = self.right.getMinValue()
                self.right.remove(self.value , self)
            # for one -sided tree, will come back to this later
            elif parent is None:
                if self.left is not None:
                    self.value = self.left.value
                    self.right =  self.left.right
                    self.left = self.left.left

                if self.right is not None:
                    self.value = self.right.value
                    self.left = self.right.left
                    self.right = self.right.right
                else:
                    # either pass or self= None
                    pass
            elif self == parent.left :
                parent.left = self.left if self.left is not None else self.right
            elif self == parent.right:
                parent.right = self.left if self.left is not None else self.right     
        return self


