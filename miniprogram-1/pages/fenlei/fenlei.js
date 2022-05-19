// pages/fenlei/fenlei.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,  //对应样式变化
        scrollTop: 0,  //用作跳转后右侧视图回到顶部
        screenArray: [
        { screenId: 1, screenName: '热搜推荐' },
        { screenId: 2, screenName: '食品酒水' },
        { screenId: 3, screenName: '生鲜果蔬' },
        { screenId: 4, screenName: '美妆护肤' },
        { screenId: 5, screenName: '个护清洁' },
        { screenId: 6, screenName: '精品男装' },
        { screenId: 7, screenName: '精品女装' },
        { screenId: 8, screenName: '内衣配饰' },
        { screenId: 9, screenName: '鞋靴箱包' },
        { screenId: 10, screenName: '手机数码' },
        { screenId: 11, screenName: '家用电器' },
        { screenId: 12, screenName: '电脑办公' },
        { screenId: 13, screenName: '运动户外' },
        { screenId: 14, screenName: '汽车生活' },
        { screenId: 15, screenName: '母婴童装' },
        { screenId: 16, screenName: '玩具乐器' },
        { screenId: 17, screenName: '家居厨具' },
        { screenId: 18, screenName: '计生情趣' },
        { screenId: 19, screenName: '京东健康' },
        { screenId: 20, screenName: '图书音像' },
        { screenId: 21, screenName: '钟表珠宝' },
        { screenId: 22, screenName: '奢侈品' },
        { screenId: 23, screenName: '京东国际' },
        { screenId: 24, screenName: '家具建材' },
        { screenId: 25, screenName: '礼品鲜花' },
        { screenId: 26, screenName: '拍拍二手' },
        { screenId: 27, screenName: '生活充值' }], //左侧导航栏内容
        screenId: "",  //后台查询需要的字段
        childrenArray: {
            childrenScreenArray: [
                { screenName: '热门搜索', childrenScreenArray: 
                    [{ screenId: 1, showImageUrl: 'http://zelu.ltd:55666/%E5%95%86%E5%93%811.jpg', screenName: '电脑' },
                    { screenId: 2, showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg', screenName: '新疆核桃' },
                    { screenId: 2, showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg', screenName: '新疆核桃' },
                    { screenId: 2, showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg', screenName: '新疆核桃' },]
                },
                { screenName: '手机数码', childrenScreenArray: 
                [{ screenId: 1, showImageUrl: 'http://img0.imgtn.bdimg.com/it/u=1138662413,2627006305&fm=26&gp=0.jpg', screenName: 'vivo手机' },
                { screenId: 1, showImageUrl: 'http://img0.imgtn.bdimg.com/it/u=1138662413,2627006305&fm=26&gp=0.jpg', screenName: 'vivo手机' },]
                },
            ]
        }, //右侧内容
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    navbarTap: function (e) {
        var that = this;
        console.log(e);
        this.setData({
          currentTab: e.currentTarget.id,   //按钮CSS变化
          screenId: e.currentTarget.dataset.screenid,
          scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
        })
        //刷新右侧内容的数据
        var screenId = this.data.screenId;
    },
    click: function () {
        wx.navigateTo({
          url: '../goods/goods',
        })
    },
})