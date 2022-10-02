
// tìm ptu cha có class thỏa ĐK (default)
export default function find_parentEle_hasClass(child_ele: any, ele_class: any) {
    while (child_ele.classList.contains(ele_class) == false) {
        child_ele = child_ele.parentElement
    }
    return child_ele
}

// căn giữa theo chiều dọc với ptu cha tại thời điểm display != none
export function alignCenter_absolute_cross(ele_to_align: any, baseEle: any) {
    let computedStyleOf_baseEle: any = getComputedStyle(baseEle)
    let total_heightOf_baseEle = 
        computedStyleOf_baseEle.height.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingTop.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderTopWidth.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingBottom.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderBottomWidth.match(/[0-9]+/)[0] * 1
    let computedStyleOf_ele_to_align: any = getComputedStyle(ele_to_align)
    let total_heightOf_ele_to_align = 
        computedStyleOf_ele_to_align.height.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingTop.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderTopWidth.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingBottom.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderBottomWidth.match(/[0-9]+/)[0] * 1
    ele_to_align.style.top =
        (total_heightOf_baseEle - total_heightOf_ele_to_align) / 2 + 'px'
}

// căn giữa theo chiều ngang với ptu cha tại thời điểm display != none
export function alignCenter_absolute_horizontal(ele_to_align: any, baseEle: any) {
    let computedStyleOf_baseEle: any = getComputedStyle(baseEle)
    let total_widthOf_baseEle = 
        computedStyleOf_baseEle.width.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingRight.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderRight.match(/[0-9]+/)[0] * 1
    let computedStyleOf_ele_to_align: any = getComputedStyle(ele_to_align)
    let total_widthOf_ele_to_align =
        computedStyleOf_ele_to_align.width.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingRight.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderRight.match(/[0-9]+/)[0] * 1
    ele_to_align.style.left =
        (total_widthOf_baseEle - total_widthOf_ele_to_align) / 2 + 'px'
}