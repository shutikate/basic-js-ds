class Node {
  constructor (data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  addRecursively(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (node.data === data) {
      return node;
    }
    if (node.data > data) {
      node.left = this.addRecursively(node.left, data);
    } else {
      node.right = this.addRecursively(node.right, data);
    }
    return node;
  }

  hasRecursively(node, data) {
    if (!node) {
      return false;
    }
    if (node.data === data) {
      return true;
    }
    if (node.data > data) {
      return this.hasRecursively(node.left, data);
    } else {
      return this.hasRecursively(node.right, data);
    }
  }

  findRecursively(node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    if (node.data > data) {
      return this.findRecursively(node.left, data);
    } else {
      return this.findRecursively(node.right, data);
    }
  }

  findMinRecursively(node) {
    if (!node) {
      return null;
    }
    if (node.left) {
      return this.findMinRecursively(node.left);
    } else {
      return node;
    }
  }

  findMaxRecursively(node) {
    if (!node) {
      return null;
    }
    if (node.right) {
      return this.findMaxRecursively(node.right);
    } else {
      return node;
    }
  }

  findParentOfRemoveNode(node, data) {
    if (node.right.data === data || node.left.data === data) {
      return node;
    }
    if (node.right.data > data) {
      return this.findParentOfRemoveNode(node.left, data);
    } else {
      return this.findParentOfRemoveNode(node.right, data);
    }
  }

  removeRecursively(node, data) {
    if(!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeRecursively(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeRecursively(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let maxNodeOnLeftSide = this.findMaxRecursively(node.left);
      node.data = maxNodeOnLeftSide.data;
      node.left = this.removeRecursively(node.left, data);
      return node;
    }
  }

  add(data) {
    this.rootNode = this.addRecursively(this.rootNode, data);
  }

  has(data) {
    return this.hasRecursively(this.rootNode, data);
  }

  find(data) {
    return this.findRecursively(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = this.removeRecursively(this.rootNode, data);
  }

  min() {
    return this.findMinRecursively(this.rootNode).data;
  }

  max() {
    return this.findMaxRecursively(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree
};