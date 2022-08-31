
// tìm ptu cha có class thỏa ĐK (default)
export default function find_parentEle_hasClass(child_ele, ele_class) {
    while (child_ele.classList.contains(ele_class) == false) {
        child_ele = child_ele.parentElement
    }
    return child_ele
}

// căn giữa theo chiều dọc với ptu cha tại thời điểm display != none
export function alignCenter_absolute_cross(ele_to_align, baseEle) {
    let heightOf_baseEle
    if (getComputedStyle(baseEle).height.match(/[0-9]+/) == null) {
        heightOf_baseEle = 0
    } else {
        heightOf_baseEle = getComputedStyle(baseEle).height.match(/[0-9]+/)[0] * 1
    }
    let total_heightOf_baseEle = heightOf_baseEle +
        getComputedStyle(baseEle).paddingTop.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(baseEle).borderTopWidth.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(baseEle).paddingBottom.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(baseEle).borderBottomWidth.match(/[0-9]+/)[0] * 1
    let total_heightOf_ele_to_align =
        getComputedStyle(ele_to_align).height.match(/[0-9]+/)[0] * 1 || 0 +
        getComputedStyle(ele_to_align).paddingTop.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).borderTopWidth.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).paddingBottom.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).borderBottomWidth.match(/[0-9]+/)[0] * 1
    ele_to_align.style.top =
        (total_heightOf_baseEle - total_heightOf_ele_to_align) / 2 + 'px'
}

// căn giữa theo chiều ngang với ptu cha tại thời điểm display != none
export function alignCenter_absolute_horizontal(ele_to_align, baseEle) {
    let widthOf_baseEle
    if (getComputedStyle(baseEle).width.match(/[0-9]+/) == null) {
        widthOf_baseEle = 0
    } else {
        widthOf_baseEle = getComputedStyle(baseEle).width.match(/[0-9]+/)[0] * 1
    }
    let total_widthOf_baseEle = widthOf_baseEle +
        getComputedStyle(baseEle).paddingLeft.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(baseEle).borderLeft.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(baseEle).paddingRight.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(baseEle).borderRight.match(/[0-9]+/)[0] * 1
    let total_widthOf_ele_to_align =
        getComputedStyle(ele_to_align).width.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).paddingLeft.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).borderLeft.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).paddingRight.match(/[0-9]+/)[0] * 1 +
        getComputedStyle(ele_to_align).borderRight.match(/[0-9]+/)[0] * 1
    ele_to_align.style.left =
        (total_widthOf_baseEle - total_widthOf_ele_to_align) / 2 + 'px'
}