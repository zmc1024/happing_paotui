var commentHeight = function() {
  let sum = 0
  let query = wx.createSelectorQuery().in(self).selectAll('.comment').boundingClientRect();
  query.exec((res) => {
    sum = res[0].reduce((pre, cur) => {
      return pre + cur.height
    }, 0)
    
    // self.setData({
    //   swiHeight: sum
    // })
  })
  console.log(sum);
  return sum
}


module.exports = commentHeight;