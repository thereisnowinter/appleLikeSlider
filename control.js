let allCircle = $('.circle  li')
console.log(allCircle)
// 点击播放
for (let i = 0; i < allCircle.length; i++) {
    $(allCircle[i]).on('click', function(a) {
        let index = $(a.currentTarget).index() // 告诉你点击的是哪一个    
        let moveTo = index * -920
        $('.imgs').css({
            transform: 'translate(' + moveTo + 'px)'
        })
        // 点击变红
        allCircle.eq(index)
            .addClass('gray')
            .siblings('.gray')
            .removeClass('gray')
    })
}
//  自动播放
let n = 0
let size = allCircle.length

activeCircle(allCircle.eq(n % size))

let timerId = setTime()

//鼠标移上 停止
$('.content').on('mouseenter', function() {
    window.clearInterval(timerId)
})
// 鼠标离开 继续
$('.content').on('mouseleave', function() {
    timerId = setTime()
})


// 圆圈高亮
function activeCircle($circles) {
    $circles.trigger('click')
        .addClass('gray')
        .siblings('.gray')
        .removeClass('gray')
}

// 自动播放
function setTime() {
    return setInterval(() => {
        n++
        activeCircle(allCircle.eq(n % size))
    }, 2000)
}