const breadthFirstTraverseRecursive = (root) => {
    if(!root) return [];
    const collector = [];
    const queue = [];
    queue.push(root);

    const breadthFirstHelper = () => {
        if(queue.length === 0) return collector;
        const node = queue.shift();
        collector.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        breadthFirstHelper();
    }

    breadthFirstHelper();

    return collector;
}

module.exports = {breadthFirstTraverseRecursive};
