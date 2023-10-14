const {createNode} = require("./df-insert-bf-traverse");

const depthFirstInsertIterative = (root, value) => {
    if (root.value === value || !value) {
        return;
    }

    let current = root;
    let previous;
    const newNode = createNode(value);

    while (current) {
        previous = current;
        if (current.value === value) {
            return;
        }
        current = value < current.value ? current.left : current.right;
    }

    if (value < previous.value) {
        previous.left = newNode;
    } else {
        previous.right = newNode;
    }
};


module.exports = {depthFirstInsertIterative};
