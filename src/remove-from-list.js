function deleteCurrent(parentNode) {
  if (parentNode.next.next) {
    parentNode.next = parentNode.next.next;
  } else {
    parentNode.next = null;
  }
}

function check(node, value) {
  if (node.value === value) {
    return true;
  } else {
    return false;
  }
}

function checkNodeAndDelete (node, value) {
  if (node.next) {
    if (check(node.next, value)) {
      checkNodeAndDelete(node.next, value);
      deleteCurrent(node);
    }
  }
}

function iterate (node, value) {
  checkNodeAndDelete(node, value);
  if (node.next) {
    iterate(node.next, value);
  }
}

function removeKFromList(l, k) {
  if (check(l, k)) {
    l = l.next;
  }
  iterate(l, k);
  return l;
}

module.exports = {
  removeKFromList
};
