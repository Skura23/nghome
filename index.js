function getId (myid) {
    return document.getElementById(myid);
};
function getClass (myclass) {
    return document.getElementsByClassName(myclass);
};
function getName (myname) {
    return document.getElementsByTagName(myname);
};
function removeClass(obj, cls){
    if (hasClass(obj,cls)===true){ //如果有这个class
        var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc        bcd' -> ' abc        bcd '
        obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc        bcd ' -> ' abc bcd '
        removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
        removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
        obj.className = removed;//替换原来的 class.  
    }
}
function addClass(obj, cls) {
    if (hasClass(obj, cls)===false){ //如果没有这个class
        var obj_class = obj.className, //获取当前class
        added = obj_class + " " + cls;//拼接class 用空格隔开
        obj.className = added;
    }
}
function hasClass(obj, cls){
    obj_class_lst = obj.className.split(/\s+/);//通过split空字符将cls转换成数组.
    x = 0;
    for(x in obj_class_lst) {
        if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
            return true;
        }
    }
    return false;
}