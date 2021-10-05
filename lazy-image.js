// 老方法會重複的讀取

// 取得視窗的高度 windows.innerHeight
// 取得元素距離視窗的距離 const domRect = element.getBoundingClientRect

// 取得文檔中所有的 image 然後監測 scroll
// const images = document.querySelectorAll('img')

// window.addEventListener('scroll', (e) => {
// 	images.forEach(image => {
// 		const imageTop = image.getBoundingClientRect().top
// 		if (imageTop < window.innerHeight) {
// 			const data_src = image.getAttribute('data-src')
// 			image.setAttribute('src', data_src)
// 		}
// 	})
// })

// 新方法，使用 intersectionObserver 交叉觀察

window.onload = function () {
  const images = document.querySelectorAll('img')

  const callback = (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        // isIntersecting 是否被觀察到 true / false
        const image = entry.target // target = 該觀察的元素
        const attribute = image.getAttribute('data-src') // 取得圖片的正確路徑，從暫存的 data-src 的 屬性中取得
        image.setAttribute('src', attribute) // 賦予 src 正確的路徑
        observer.unobserve(image) // 當顯示圖面後，移除觀察
      }
    })
  }
  const observer = new IntersectionObserver(callback)
  images.forEach((image) => {
    observer.observe(image)
  })
}
// 知識點：InstersectionObserver 的使用流程說明
// 注意用詞：obersber (觀察者)  observe (觀察)， intersection (路口)  isIntersecting (是否正在相交 true false)
// 1.先找到文檔中要觀察的對象 image
// 2.把要觀察的對象使用 observer.observe('要觀察的對象') 做監控
// 3.當被觀察者被觀察到觸發的時候 (isIntersecting 會是 true)
// 4.把檔案中的 data-src 讀取出來，然後寫進去被觀察對象的 src 屬性中
// 5.移除觀察者 observer.unobserv('被觀察的對象')
// 6.以上就不會重複觸發了，結束
