
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [12222, 33332, 44443, 55554, 222225],
    msg: "hello wolrd ,test data bind",
    flag: true,
    staff: [
      {
        firstName: "wang", lastName: "xiaogou", action: () => {
          wx.showToast({ title: "wagn click" });
        }
      },
      {
        firstName: "li", lastName: "lili", action: () => {
          wx.showToast({ title: "wagn click" });
        }
      },
      {
        firstName: "zhang", lastName: "ergou" , action: () => {
          wx.showToast({ title: "wagn click" });
        }
      },
    ],
  },
  clickBind() {

    // this.setData!({
    //     flag:false
    // });

    wx.showLoading({
      title: "loading ...............",
    });

    setInterval(() => {
      wx.hideLoading({})
    }, 2000)
  },


})