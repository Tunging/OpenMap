"use strict";

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoHeight: 0,
    longitude: 0,
    latitude: 0,
    markers:[],
    inputAddress:"",
    qqmapKey:"2EWBZ-BIHCU-G7EVV-4M2DW-7I6TO-QJF72"
  },

  onLoad(e) {

    var that = this
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        console.log(res.windowHeight)
        that.setData({
          autoHeight: res.windowHeight
        });
      },
    })

    qqmapsdk = new QQMapWX({
      key: this.data.qqmapKey
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')

    var that = this;
    setTimeout(function() {
      that.mapCtx.moveToLocation()
    }, 500)

    this.mapCtx.getCenterLocation({
      success: function(result) {
        that.setData({
          longitude: result.longitude,
          latitude: result.latitude
        })
      }
    })
  },

  doLocation: function() {
    this.mapCtx.getScale({
      success: function(result) {
        console.log(result)
        wx.showToast({
          title: result
        })
      }
    })
  },
  doCenterMe: function() {
    this.mapCtx.moveToLocation()
  },
  centeAll: function() {
    this.mapCtx.includePoints({
      points: [{
        longitude: 1,
        latitude: 2
      }, {
        longitude: 100,
        latitude: 23
      }],
      padding: [2]
    })
  },
  centerAddress:function(){
    var that = this;
    qqmapsdk.search({
      keyword:this.data.inputAddress,
      success:function(res){
        console.log(res)
        var list = res.data
        
      },
      fail:function(res){
        console.log(res)
      }
    })
  },
  onInput:function(e){
    this.setData({
      inputAddress :e.detail.value
    })
  },
})