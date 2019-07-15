// ������ĳһ������������ַ������������������ǰ׺�Լ������ַ�����ص�����

function TreeNode() {
    this.path = 0 // ��������ڵ��·�ж�����
    this.end = 0 // ������ڵ��β���ַ����ж���
    // ����������������Ը����Լ�����Ҫ�����и��ġ������һ���������������֪���ж��ٸ��Ը��ַ���Ϊǰ׺���ַ������ڶ����������������֪���Ƿ���ֹ����ַ���
    this.nextNode = new Array(24) // 24����ĸ
}

const root = new TreeNode() // ���ڵ㣬���е����ɾ�����Ķ���Ҫ�Ӹ��ڵ����

function trie (string){ // �����ַ�������ǰ׺��
    if(!string) {
        return
    }
    const arrChar = string.split('')
    const node = root
    for (let i = 0; i < arrChar.length; i++) {
        const index = arrChar[i] - 'a'; // ����������ַ�����a~z֮��
        if(!node.nextNode[index]) {
            node.nextNode[index] = new TreeNode()
        }
        node = node.nextNode[index]
        node.path++
    }
    node.end++
}

// ���س��ֵ�����ַ����Ĵ���
function search(word) {
    if(!word) return
    const node = root
    const arrChar = word.split('')
    for (let i = 0; i < arrChar.length; i++) {
        const index = arrChar[i] - 'a'; // ����������ַ�����a~z֮��
        if(!node.nextNode[index]) {
            return 0
        }
        node = node.nextNode[index]
    }
    return node.end
}

// ���ع���ǰ׺���ַ����Ĵ���
function prefix(word) {
    if(!word) return
    const node = root
    const arrChar = word.split('')
    for (let i = 0; i < arrChar.length; i++) {
        const index = arrChar[i] - 'a'; // ����������ַ�����a~z֮��
        node = node.nextNode[index]
    }
    return node.path
}

// delete ɾ��һ���ַ���
function deleteWord(word) {
    if(!word) return
    if(search(word) === 0) return
    const node = root
    const arrChar = word.split('')
    for (let i = 0; i < arrChar.length; i++) {
        const index = arrChar[i] - 'a'; // ����������ַ�����a~z֮��
        if(node.path === 1) {
            node.path = 0
            break
        }
        node.path--
        node = node.nextNode[index]
    }
}