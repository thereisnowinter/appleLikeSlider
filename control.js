const allCircle = $('.circle  li')
const size = allCircle.length
let n = 0
let isRun = true

// 点击播放
allCircle.each(function (index, element) {
  $(element).on('click', function (event) {
    // 位移
    move(index)
    // 点击变红
    activeCircle(index)
  })
})

//  自动播放

//鼠标移上 停止
$('.content').on('mouseenter', function () {
  isRun = false
})
// 鼠标离开 继续
$('.content').on('mouseleave', function () {
  isRun = true
  run()
})


// 圆圈高亮
function activeCircle(index) {
  allCircle.eq(index % size).addClass('gray').siblings().removeClass('gray')
}
// 图片位移
function move(index) {
  let n = index % size
  $('.imgs').css({
    transform: 'translateX(' + (n * -920) + 'px)'
  })
}


// 自动播放
run()

function run() {
  setTimeout(function run() {
    activeCircle(n)
    move(n)
    n++
    if (isRun) {
      setTimeout(run, 2000)
    }
  }, 2000)
}
// // console.log(allCircle)
// // 点击播放
// for (let i = 0; i < allCircle.length; i++) {
//     $(allCircle[i]).on('click', function(a) {
//         let index = $(a.currentTarget).index() // 告诉你点击的是哪一个    
//         let moveTo = index * -920
//         $('.imgs').css({
//             transform: 'translate(' + moveTo + 'px)'
//         })
//         // 点击变红
//         allCircle.eq(index)
//             .addClass('gray')
//             .siblings('.gray')
//             .removeClass('gray')
//     })
// }
// //  自动播放
// let n = 0
// let size = allCircle.length

// activeCircle(allCircle.eq(n % size))

// let timerId = setTime()

// //鼠标移上 停止
// $('.content').on('mouseenter', function() {
//     window.clearInterval(timerId)
// })
// // 鼠标离开 继续
// $('.content').on('mouseleave', function() {
//     timerId = setTime()
// })


// // 圆圈高亮
// function activeCircle($circles) {
//     $circles.trigger('click')
//         .addClass('gray')
//         .siblings('.gray')
//         .removeClass('gray')
// }

// // 自动播放
// function setTime() {
//     return setInterval(() => {
//         n++
//         activeCircle(allCircle.eq(n % size))
//     }, 2000)
// }